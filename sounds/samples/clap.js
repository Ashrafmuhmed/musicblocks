/**
 * @license
 * MusicBlocks v3.4.1
 * Copyright (C) 2017 eohomegrownapps
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

CLAP_SAMPLE = function () {
    return "data:audio/wav;base64,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";
};