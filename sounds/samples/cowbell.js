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

COWBELL_SAMPLE = function () {
    return "data:audio/wav;base64,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o/9f/8v/UQBVAO//f/9z/7v/6//H/7P/0//7/9//n/97/7//GQBNADEA+//f/wEAPQBJAEUAcQChAGUA3/97/6//TQC1AFUAl/8z/2//9/8tAAAAl/9//7//6//b/7f/0/8dAD0AAAC7/8f/HQBdAFEAHQD7//v/CQANABEAPQCFAIEABQB7/3v///+BAH0A1/9b/2f/w/8JAAAAw/+z/+f/BQDj/5//r/8dAGkAXQD//8f/AQBdAIEAZQAxAAkA///3/+v/AABJAGkAEQCL/1P/r/9JAHUADQCX/3//0/8BAAEA6//r/yEASQANALf/l//7/30AkQAZALv/v/8ZAGEAYQBJACUADQD7/9v/7/8lAGUAPQDL/2v/e//3/0UAKQDL/7P/5/8BAP//2//n/z0AiQBZAOP/k//X/2EAsQBpAOf/n//j/yEALQAlABEA///r/8P/r//r/0UAYQAhAMf/q//r/z0ARQAAAOP///8RAPf/t//H/yUAjQCNAAUAj/+b/x0AjQB5AP//p//H/wkAMQAdABkAIQARAOP/u/+/////OQA1AP//2//3/zEAWQA1ABkAPQBNABUAr/+H/9//XQCNACUAm/93/+P/aQCFAB0At/+z/+f/BQAAAAUAOQBZAEEAAADP//P/NQBVACEA2/+//+P/AQAJAAkAPQBxAEUA3/+X/7v/KQBtACEAl/9X/6P/JQBtADUA3//H//P/AADX/9P/CQBhAIEAQQDz/+//NQB1AIEAQQAAAOP/3//b/8P/7/9BAEEA8/+T/4v/9/9NADkAw/9f/3v/4/8lAC0A+//v/y0APQAAAM//8/9ZAJkAXQDr/6//4/9BAH0AbQBFAA0A8//b/7P/v////x0A4/+H/1v/q/8lAEUA8/+j/5//6/8lAB0AAAD//0EAcQA9APv///9ZAMUAsQAtALv/q//v/ykAQQAtAA0A+//b/6v/n//T/x0AFQC7/2f/f//n/ykAEQDf/9f/BQAtACEABQAJAEkAhQBZAPP/w/8VAKEA0QBxAOf/n//L/wUAFQAFAPv/7//H/5f/c/+f/wAANQD//6f/m//X/xUAIQAFAAkALQBVAEEAFQANAEEAlQCNABEAq//P/00AoQBpAPv/r/+7/+v/9//v//v/AQD//8v/j/+H/9P/LQBNAAkAz//X/wUAHQARABUATQBpAEkAAADz/zEAjQCpAD0Au/+r/wkAZQBRAPf/q/+n/8v/5//T/9v/AAARAP//t/97/6v/GQBpAFUADQDz/wEAEQAVABkARQBpADkA6//H//P/SQB9AEkA5/+j/+f/OQBFAAAAs/+3/+v////T/7//+/85ADkA//+j/4v/6/9RAGkAPQANAAEABQAJABUARQB1AGEA//+X/5P/6/9BAEEA8/+j/7P/AAAtAAUA1//X/wkAFQDj/7//8/9JAHkASQDz/7P/1/8pAEkAMQAFAOP/2//f/+P/AABNAHEAJQDD/4v/r/8AADUAAAC3/7v/8/8NAAAA4//3/y0ATQAFAK//w/8RAGUAbQAZANP/y/8NAEEAOQAJAN//z//H/6v/p//3/z0AMQDj/5//q//7/zEAKQAJAAAADQANAAAA8/8BAFEAhQBBAM//l//j/0UAaQAhAL//p//v/ykAJQAFAOv/4//n/9P/r//P/w0AIQD//8P/s//b/wkAMQAlACEALQAdAPv/3//r/0kAqQCRAAEAk/+r/wkAUQAxANf/r//H//P/+//j/9f/6/////P/v/+v/+//KQAtAAAA3//n/xEANQAxADUAPQA1AAAAv/+//xUAlQCZACUAr/+P/+v/NQAxAPP/r/+r/8v/z/+//6//z/8BAA0A3/+r/8f/CQA1ABkA+//7/xUAOQAxAEUAbQBtADUA4/+z/+P/QQCBAEUA0/+L/6//BQApAAAA1//X/+f/z/+b/4v/w/8NAEEAEQDT/8//BQBJAD0AGQAFAAEADQAZACkAUQBtAFUACQDD/7//BQBVAEEA0/93/3//x//7/+v/2//3/wkA//+v/4P/q/8JAEkANQD3/8//7/85AGkATQApABkAGQAJAPv/AAAhAC0ABQDD/6v/4/8lADUA+/+n/5P/t//L/8P/t//v/ykAKQDr/6P/p/8AAGkAeQAZAMP/v/8AAD0ASQApACkAMQAVAPf/7/8FACEABQDL/6f/t//z/xEAAQDb/8f/2//v/9f/t//X/ykAVQANALP/k//v/2UAlQBZAPf/w//f/wkAFQAFAAUAFQANAOv/y//j/w0AJQAAAMP/t//T//v/AADz/+f/AAARAO//y//X/yEAYQBFANv/i/+//yUAbQBhAAkA2//f///////v//f/FQAdAPP/u/+z/+//JQApAP//2//b//P/AQAFAAEAEQAlAAkA0//L/wEAWQBdAAAAn/+j//f/OQA9AAkA6//n//f////j/+f/DQA5AB0A2/+n/8v/GQBJADkACQD7//f/AAAAAAEAJQBBACUA7//D/+f/OQBhACUAx/+f/9P/BQAZAAAA3//r/wEAAADn/9v///89AEkAAQCv/7P/AQBFAEkAKQANAAEA///3/wAAGQA5ADEA9/+7/7f///9FAEUA9/+//9f/AAABAOv/0//v/w0ABQDf/8f/9/9FAH0ASQDv/7v/6/8xAFEAOQAhABEABQD3//f/AQAtAD0AEQDD/4//u////x0AAADX/+f/AAABAOv/2////ykAIQDz/7v/y/8lAIEAfQAdANv/6/8dAEUANQAJAAAA+//j/8f/z/8FADUALQD3/6//n//H//f/8//X/+P///8AAOP/1////0EAYQAdANv/v////00AcQA1AOv/4/8VADkAMQANAAAAAADr/7v/o//T/wUAJQANAN//v//H//P/AQD7//f/AQAFAN//t//b/y0AdQBZAP//w//f/xUAPQAlAOP/w//n/wUACQDz/+v/BQAJANv/n/+f/9v/CQAVAPP/w//H/+P/AAAJABEAJQApAAAAx/+//wAAXQBlABUAz//L/wAALQAlAPP/z//f//v/7//T/9f/AAAtABEA0/+r/9P/DQAtABUA6//P/9f/8/8AAAkAKQBFACUA4/+z/9v/KQBVACEA2/+//+P/AAAFAPf/3//n//v/8/+3/6v/2/8hAC0A9/+z/7//AAA9AD0AEQD7//P/7//7/wEAJQBBAD0A//+3/7P/+/8tACUA9//H/9P/9////+v/5/8AABkAEQDX/6f/y/8hAE0AHQDX/8P/9/8lAD0AIQABAPv////3////AQAdAD0AFQDf/7f/1/8NAB0A///b/9v/7//z/9v/3/8FAD0AOQD//7v/u/8JAFUATQAAAM//3/8VADkALQAZAAkAAQD//+P/2////yEAIQD7/7//w//3/xUACQD3//f/+//r/8f/w//v/yUAQQARANP/t//3/0UAWQAhAN//0/8AABUADQABAAUAGQARAPP/y//b/wAAHQAFANf/u//P////DQAJAAUAFQAJAOP/x//j/x0ASQA5APP/s//X/yUAXQA9AAAA4//7/wUA+//f/+//DQAZAP//y//D/+//GQAlAAAAz//D/+P/9//7/wAAFQAZAPv/z//T/w0ARQBFAP//u/+/////MQAtAAEA7/8AAAUA8//L/9P/AAAdAAkA1/+r/8f/AQApACUAAADj/+v/9//3////EQApABUA4//P//v/OQBVACEA4//H/+P/AAANAP//8////wkA///L/8f/AAA9ADkA+/+r/6f/4/8VACEADQAAAPf/+//7//P/BQAlABkA9//L/9P/BQAxACUA+//X/+P/9////+//5//7/xEAAQDP/6//5/81AF0AKQDj/7//2/8BAB0AGQAFAAAAAAD7//P/+/8VADEAGQDn/8v/6/8VAB0AAADv//f/AAABAPf/7/8FACEAFQDf/6//w/8RAF0ATQABAM//3/8AABUAGQANAAUACQD//9v/0//z/yEAMQABANv/1//3/wUAAAD3/wAABQAFAPv/8/8JADkAPQAFAMf/t//7/z0AUQAVAN//2//7/wkADQAJABUAJQARAOv/x//T/wUALQAlAPv/2//j//v///8AAAUAEQANAPP/2//z/yEASQAxAOv/v//j/yEARQAhAO//3//z//v/9//v////EQAZAPv/y//D/+//IQA5ABUA9//z////AAAAAA0AKQAhAAAA3//b/wkAOQA5AAEAz//L////HQAdAPf/4//7////6//X/+f/DQApAA0A0/+z/8//AQAtACkABQD3//v/AAAAAAkAHQAxABUA4//L/+P/FQAtAA0A5//T/+P/AAAAAOf/2//v//f/4/+//8f/AAA1ADEA///H/8f///8pAC0AEQD/////AAAAAAEAFQA5ADUABQDX/8//9/8RAA0A8//X/9f/5//v/9//3////wUA+/+7/6P/1/8ZADkAGQDr/9v/+/8dADUAHQAAAP//AADz/+P/9/8RADUAGQDn/8v/3/8AAAUA+//j/9f/3//X/8v/3/8FADEAJQD3/8P/z/8JAEUAMQAAAOP/8/8VAC0AJQAVABkAHQANAO//4/8AABUAGQD3/8//1//z/wAAAQAAAPf/7//f/8f/x//3/ykAQQAVAOP/0/8FAEUATQAdAPf/+/8BAA0ABQABAA0AIQAZAP//1//r/wUAGQAFAN//x//b//v/CQANABUAFQAAAOP/2//v/yUAUQA1APv/1//3/ykAQQAtAA0ABQANAAUA+//r//f/CQAdAP//0//H/+//FQARAPP/z//P/+f///8FABUAIQAZAAAA3//r/xkARQBJAA0A3//b//v/EQARAAUABQANAAUA6//L/9P/AAAhABEA4//D/9//BQAhAAkA7//j/+v/9////wkAHQAlAA0A8//n/wAAMQBJACkA7//X/+P/+//7//P/+/8JAAkA5/+7/7f/5/8VABkA6/+//8f///8dACUACQAAAAAABQABAAAADQAhABUA///X/9//AQApAC0AAQDv/+f/6//n/9//6/8JAB0A///H/7P/3/8RADEADQDf/8f/5/8JABUACQAAAA0AEQAJAAAAAQAZACUABQDf/8v/2/8AAAkAAQDz/+//5//X/8//0////xkACQDX/7f/z/8FADUALQAAAOP/7/8BABEAAQAAAAAADQAAAOv/5/8FACUAGQD//9f/z//j//f/AAD7//v/9//n/9P/z//z/x0AKQD//8P/x//3/yUANQAVAP////8JAA0AAQAAAAUAEQAFAOP/y//f/wUAHQANAPP/1//T/+v/AAAAAAAABQD//+P/1//v/x0APQAlAO//1//3/xUAJQAVAAEAAAANAA0AAAD7/wAAHQAdAAAA0//L//P/HQAlAAEA7//j/+//+/8AAAUAFQAVAP//4//n/w0APQBBABUA8//3/wkAGQARAAAAAAABAAEA8//j/+//FQAxABEA3//H/9//DQAhABUAAAD3//v/+////w0AJQApABUA9//j/+//GQAxAB0AAAD3/wAADQABAPv/AAAJAAkA7//P/9f/AAAxACkA///P/9f/AAAhACUADQABAAAAAAAAAAUAGQA1ADEAEQDv/+P/AAARABEAAADz//v/AAD3/+v/9/8RABUAAADT/8P/6/8hADUAEQDn/9f/7/8VACkAHQANAAkAAQD7//P/AAAdADkAJQD//9//7/8AAAEAAAD7////+//v/9//6/8FACEAFQDv/8v/2/8JADEAKQAAAOv/+/8RAB0AGQAVABkAGQD//+P/3/8AACEAIQAFAOv/2//r//v//////wAAAAD3/9//3////yUALQAJAOf/3/8AAC0AMQAJAPf///8FABEACQANACUAKQARAOv/z//j/wAAFQANAPP/3//j//f/AAABAAEADQABAOv/0//v/xEAMQAhAAAA8/8FACUALQAVAAEAAAABAAAA9//3/wUAJQApAAEA3//T//f/EQAZAAAA6//f/+//+/8AABEAIQAlAAEA6//n/wUAJQAlAA0A9/8AABkAKQAhABkAEQARAAUA9//b/+v/EQApAA0A5//P/+v/DQAlABUAAAD3//P/8//7/wUAIQAxACUABQD7/wEAJQAtAB0A///z////BQAFAAEACQAdABkAAADf/9v/AAAlABkA9//P/9v/AAAVAB0AEQAJAAUA///3//f/AQAdACUAEQD3////EQAtACUADQAAAP//+//v/+////8RABkAAQDj/9f/+/8hADEADQDn/9v/8/8JABEADQANAA0AEQAAAPf///8NACUAEQDz/+P/7/8FABEADQABAAAAAADz/+P/7/8FABUABQDn/8v/3/8JAC0AHQD//+v/7/8AAAAAAAAAABEAGQAFAPP/6/8AAB0AJQAFAOv/3//r//v/AAAAAAEAAAD3/+P/5/8AAB0AGQAAANP/0////x0AIQAJAPf///8AAAAA9//3/wEAEQABAOv/0//j/wAAFQAJAO//1//f/+f/9//3////AAD7/9//0//v/xEAHQAJAOf/0//n/wAADQABAAAAAAAAAAAA7//n//v/EQANAPP/y//D/+f/AQAFAPv/4//j/+v/6//z////BQAFAPP/3//n/wUAIQAhAAUA7//n//f/AAAAAAAAAAAFAAAA6//b/+//EQAdAAEA3//L/9v/+/8BAAAA8//z//f/+//3////AQARAAEA7//f//f/FQApACEABQAAAAAAAAAAAP//AQARAAUA7//P/9v/AQAhAB0A///b/9//9/8FAAEA///7////AAD7//v/AQAZABkAAAA=";
};