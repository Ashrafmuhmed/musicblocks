// Copyright (c) 2015-2024 Yash Khandelwal
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the The GNU Affero General Public
// License as published by the Free Software Foundation; either
// version 3 of the License, or (at your option) any later version.
//
// You should have received a copy of the GNU Affero General Public
// License along with this library; if not, write to the Free Software
// Foundation, 51 Franklin Street, Suite 500 Boston, MA 02110-1335 USA

/* global requirejs */

requirejs.config({
    baseUrl: "lib",
    shim: {
        easel: {
            exports: "createjs"
        }
    },
    paths: {
        utils: "../js/utils",
        widgets: "../js/widgets",
        activity: "../js",
        easel: "../lib/easeljs",
        twewn: "../lib/tweenjs",
        prefixfree: "../bower_components/prefixfree/prefixfree.min",
        samples: "../sounds/samples",
        planet: "../js/planet",
        tonejsMidi: "../node_modules/@tonejs/midi/dist/Midi",
        i18next: "../node_modules/i18next/dist/umd/i18next.min",
        i18nextHttpBackend: "../node_modules/i18next-http-backend/i18nextHttpBackend.min"
    },
    packages: []
});

requirejs(['i18next', 'i18nextHttpBackend'], function (i18next, i18nextHttpBackend) {

    /**
     * Updates all elements with the data-i18n attribute to their translated value.
     * It will use the textContent property if the translation does not contain HTML tags,
     * and the innerHTML property if it does. For input and textarea elements, it will
     * use the placeholder property.
     */
    function updateContent() {
        console.log('updateContent() called');  // Debugging line
        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach((element) => {
            const key = element.getAttribute("data-i18n");
            const translation = i18next.t(key);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation; // For input and textarea elements
            } else if (translation.includes('<') && translation.includes('>')) {
                element.innerHTML = translation; // Use innerHTML if translation contains HTML tags
            } else {
                element.textContent = translation; // Use textContent for plain text
            }
        });
    }

    /**
     * Initializes the i18next library to manage translations in the activity.
     *
     * This function will attempt to load the translations from the ../locales/{{lng}}.json
     * file, where {{lng}} is the language code for the user's preferred language.
     *
     * If the initialization is successful, the i18next instance will be stored in the global
     * window.i18next variable.
     *
     * @throws {Error} If the initialization fails, an error will be thrown.
     */
    async function initializeI18next() {
        try {
            await i18next
                .use(i18nextHttpBackend)
                .init({
                    lng: 'en',
                    fallbackLng: 'en',
                    keySeparator: false,
                    nsSeparator: false,
                    interpolation: {
                        escapeValue: false
                    },
                    backend: {
                        loadPath: '../locales/{{lng}}.json'
                    },
                    debug: true // Enable debug mode for easier troubleshooting
                });

            console.log('i18next initialized');
            window.i18next = i18next;
            console.log('i18next Store:', i18next.store.data);
        } catch (err) {
            console.error('i18next init failed:', err);
            throw err;
        }
    }

    /**
     * Asynchronously initializes the i18next library and updates the content of 
     * the document with translated values. Attaches an event listener to update 
     * content when the DOM is fully loaded if not already loaded. Logs errors 
     * if the initialization of i18next fails.
     */
    async function main() {
        try {
            await initializeI18next();

            const update = () => {
                console.log('Updating content');
                updateContent();
            };

            if (document.readyState === 'loading') {
                document.addEventListener("DOMContentLoaded", update);
            } else {
                console.log('DOM is already loaded');
                update();
            }
        } catch (error) {
            console.error('Error initializing i18next:', error);
        }
    }

    main().then(() => {
        requirejs(["utils/utils", "activity/activity"]);
    });

    i18next.on('languageChanged', () => {
        clearTimeout(debounceTimer);
        const debounceTimer = setTimeout(() => {
            updateContent();
        }, 100);
    });

    i18next.changeLanguage(lang, (err, t) => {
        if (err) {
            console.error('Error changing language:', err);
            return;
        }
        console.log('Language changed to:', lang);
        updateContent();
    });

});
