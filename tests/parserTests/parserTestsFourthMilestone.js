var makeParser = require('../../transpiler/parser/parser');
var expect = require('chai').expect;
var util = require('util');
var R = require('ramda');
var parser;

describe('Parser: Fourth Milestone', function() {

  beforeEach(function() {
    parser = makeParser();
  });

  xdescribe('Classes and Stuctures', function () {

    // input = String.raw`class VideoMode {
    //                       var interlaced = false
    //                       var frameRate = 0.0
    //                   }
    //                   struct Resolution {
    //                       var width = 0
    //                       var height = 0
    //                   }`;

    // AST Explorer input:
    xit('should handle basic definitions of classes and structs', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "VideoMode" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "interlaced" },
        { type: "OPERATOR",                   value: "=" },
        { type: "BOOLEAN",                    value: "false" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "frameRate" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0.0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "height" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class VideoMode {
    //                var interlaced = false
    //                var frameRate = 0.0
    //             }
    //             struct Resolution {
    //                 var width = 0
    //                 var height = 0
    //             }

    //             let someVideoMode = VideoMode()
    //             let someResolution = Resolution();`;

    // AST Explorer input:
    xit('should handle basic initialization of classes and structs', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "VideoMode" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "interlaced" },
        { type: "OPERATOR",                   value: "=" },
        { type: "BOOLEAN",                    value: "false" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "frameRate" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0.0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "height" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someVideoMode" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "VideoMode" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someResolution" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "PUNCTUATION",                value: ";" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class VideoMode {
    //                        var interlaced = false
    //                        var frameRate = 0.0
    //                     }
    //                     struct Resolution {
    //                         var width = 0
    //                         var height = 0
    //                     }

    //                     let someVideoMode = VideoMode()
    //                     let someResolution = Resolution();

    //                     let someFrameRate = someVideoMode.frameRate;
    //                     let someWidth = someResolution.width`;

    // AST Explorer input:
    xit('should handle basic property access via dot notation', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "VideoMode" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "interlaced" },
        { type: "OPERATOR",                   value: "=" },
        { type: "BOOLEAN",                    value: "false" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "frameRate" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0.0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "height" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someVideoMode" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "VideoMode" },
        { type: "INITIALIZATION_START",        value: "(" },
        { type: "INITIALIZATION_END",          value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someResolution" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "PUNCTUATION",                value: ";" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someFrameRate" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "someVideoMode" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "frameRate" },
        { type: "PUNCTUATION",                value: ";" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someWidth" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "someResolution" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`struct Resolution {
    //                       var width = 0
    //                       var height = 0
    //                   }

    //                   let someResolution = Resolution(width: 640, height: 480)`;

    // AST Explorer input:
    xit('should handle basic memberwise initialization', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "height" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someResolution" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "640" },
        { type: "PUNCTUATION",                value: "," },
        { type: "IDENTIFIER",                 value: "height" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "480" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`var resolutionHeight = 480
    //                     struct Resolution {
    //                         var width = 0
    //                         var height = 0
    //                     }

    //                     let someResolution = Resolution(width: ((50 * 2) * 6) + 40, height: resolutionHeight)`;

    // AST Explorer input:
    xit('should handle complex memberwise initialization with internal parentheses', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "resolutionHeight" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "480" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "height" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "someResolution" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Resolution" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "IDENTIFIER",                 value: "width" },
        { type: "PUNCTUATION",                value: ":" },

        { type: "PUNCTUATION",                value: "(" },
        { type: "PUNCTUATION",                value: "(" },
        { type: "NUMBER",                     value: "50" },
        { type: "OPERATOR",                   value: "*" },
        { type: "NUMBER",                     value: "2" },
        { type: "PUNCTUATION",                value: ")" },
        { type: "OPERATOR",                   value: "*" },
        { type: "NUMBER",                     value: "6" },
        { type: "PUNCTUATION",                value: ")" },
        { type: "OPERATOR",                   value: "+" },
        { type: "NUMBER",                     value: "40" },

        { type: "PUNCTUATION",                value: "," },
        { type: "IDENTIFIER",                 value: "height" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "IDENTIFIER",                 value: "resolutionHeight" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`struct Greeting {
    //                       var greeting = ""
    //                   }
    //                   func returnWorld() -> String {
    //                       return "World"
    //                   }
    //                   var helloWorld = Greeting(greeting: "Hello, \(returnWorld())!")`;

    // AST Explorer input:
    xit('should handle complex memberwise initialization with string interpolation that contains a function invocation', function () {
      input = [

      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`struct FixedLengthRange {
    //                         var firstValue: Int
    //                         let length: Int
    //                     }
    //                     let rangeOfOneHundred = FixedLengthRange(firstValue: 1, length: 100)`;

    // AST Explorer input:
    xit('should handle variable and constant stored properties', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "FixedLengthRange" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "firstValue" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "TYPE_NUMBER",                value: "Int"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "length" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "TYPE_NUMBER",                value: "Int"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "rangeOfOneHundred" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "FixedLengthRange" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "IDENTIFIER",                 value: "firstValue" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "1" },
        { type: "PUNCTUATION",                value: "," },
        { type: "IDENTIFIER",                 value: "length" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "100" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class Medley {
    //                 var a = 1
    //                 var b = "hai, world"
    //                 let c = true
    //                 /* Comment 1

    //                 */ var d = 1 // Comment 2
    //                 var e = ["Eggs", "Milk", "Bacon"];
    //                 var f = ["one": 1, "two": 2, "three": 3]
    //                 let http200Status = (statusCode: 200, description: "OK")
    //                 var g = 5 + 6 / 4 - (-16 % 4.2) * 55
    //                 let h = 6 != 9
    //                 var i = "Stephen" + " " + "Tabor" + "!"
    //             }`;

    // AST Explorer input:
    xit('should handle properties of all kinds', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "Medley" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "a" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "1" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "b" },
        { type: "OPERATOR",                   value: "=" },
        { type: "STRING",                     value: "hai, world" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "c" },
        { type: "OPERATOR",                   value: "=" },
        { type: "BOOLEAN",                    value: "true" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "MULTI_LINE_COMMENT_START",   value: "/*"},
        { type: "COMMENT",                    value: " Comment 1 "},
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "MULTI_LINE_COMMENT_END",     value: "*/"},
        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "d" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "1" },
        { type: "COMMENT_START",              value: "//"},
        { type: "COMMENT",                    value: " Comment 2"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "e" },
        { type: "OPERATOR",                   value: "=" },
        { type: "ARRAY_START",                value: "[" },
        { type: "STRING",                     value: "Eggs" },
        { type: "PUNCTUATION",                value: "," },
        { type: "STRING",                     value: "Milk" },
        { type: "PUNCTUATION",                value: "," },
        { type: "STRING",                     value: "Bacon" },
        { type: "ARRAY_END",                  value: "]" },
        { type: "PUNCTUATION",                value: ";" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "f" },
        { type: "OPERATOR",                   value: "=" },
        { type: "DICTIONARY_START",           value: "[" },
        { type: "STRING",                     value: "one" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "1" },
        { type: "PUNCTUATION",                value: "," },
        { type: "STRING",                     value: "two" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "2" },
        { type: "PUNCTUATION",                value: "," },
        { type: "STRING",                     value: "three" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "3" },
        { type: "DICTIONARY_END",             value: "]" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "http200Status" },
        { type: "OPERATOR",                   value: "=" },
        { type: "TUPLE_START",                value: "("},
        { type: "TUPLE_ELEMENT_NAME",         value: "statusCode"},
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "200"},
        { type: "PUNCTUATION",                value: "," },
        { type: "TUPLE_ELEMENT_NAME",         value: "description"},
        { type: "PUNCTUATION",                value: ":" },
        { type: "STRING",                     value: "OK"},
        { type: "TUPLE_END",                  value: ")"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "g" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "5" },
        { type: "OPERATOR",                   value: "+" },
        { type: "NUMBER",                     value: "6" },
        { type: "OPERATOR",                   value: "/" },
        { type: "NUMBER",                     value: "4" },
        { type: "OPERATOR",                   value: "-" },
        { type: "PUNCTUATION",                value: "(" },
        { type: "OPERATOR",                   value: "-" },
        { type: "NUMBER",                     value: "16" },
        { type: "OPERATOR",                   value: "%" },
        { type: "NUMBER",                     value: "4.2" },
        { type: "PUNCTUATION",                value: ")" },
        { type: "OPERATOR",                   value: "*" },
        { type: "NUMBER",                     value: "55" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "let" },
        { type: "IDENTIFIER",                 value: "h" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "6" },
        { type: "OPERATOR",                   value: "!" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "9" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "i" },
        { type: "OPERATOR",                   value: "=" },
        { type: "STRING",                     value: "Stephen" },
        { type: "OPERATOR",                   value: "+" },
        { type: "STRING",                     value: " " },
        { type: "OPERATOR",                   value: "+" },
        { type: "STRING",                     value: "Tabor" },
        { type: "OPERATOR",                   value: "+" },
        { type: "STRING",                     value: "!" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class Counter {
    //                         var total = 0
    //                         func increment() {
    //                             ++total
    //                         }
    //                         func incrementBy(amount: Int) {
    //                             total += amount
    //                         }
    //                         func reset() {
    //                             total = 0
    //                         }
    //                     }
    //                     var someCounter = Counter()
    //                     someCounter.incrementBy(5)`;

    // AST Explorer input:
    xit('should handle basic class instance method definitions, and their invocation', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "increment" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "incrementBy" },
        { type: "PARAMS_START",               value: "(" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "reset" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        {type: "DECLARATION_KEYWORD",         value: "var" },
        { type: "IDENTIFIER",                 value: "someCounter" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "someCounter" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "incrementBy" },
        { type: "INVOCATION_START",           value: "(" },
        { type: "NUMBER",                     value: "5" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class Counter {
    //                         var total = 0
    //                         func increment() {
    //                             ++total
    //                         }
    //                         func incrementBy(amount: Int, numberOfTimes: Int) {
    //                                 total += amount * numberOfTimes
    //                         }
    //                         func reset() {
    //                             total = 0
    //                         }
    //                     }
    //                     var someCounter = Counter()
    //                     someCounter.incrementBy(50, numberOfTimes: 10)
    //                     someCounter.total`;

    // AST Explorer input:
    xit('should handle basic class instance method definitions with multiple parameter names, and their invocation', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "increment" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "incrementBy" },
        { type: "PARAMS_START",               value: "(" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "PUNCTUATION",                value: "," },
        { type: "IDENTIFIER",                 value: "numberOfTimes" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "OPERATOR",                   value: "*" },
        { type: "IDENTIFIER",                 value: "numberOfTimes" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "reset" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        {type: "DECLARATION_KEYWORD",         value: "var" },
        { type: "IDENTIFIER",                 value: "someCounter" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "someCounter" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "incrementBy" },
        { type: "INVOCATION_START",           value: "(" },
        { type: "NUMBER",                     value: "50" },
        { type: "PUNCTUATION",                value: "," },
        { type: "IDENTIFIER",                 value: "numberOfTimes" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "NUMBER",                     value: "10" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "someCounter" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class Counter {
    //                         var total = 0
    //                         func increment() {
    //                             ++self.total
    //                         }
    //                         func incrementBy(amount: Int) {
    //                             self.total += amount
    //                         }
    //                         func reset() {
    //                             self.total = 0
    //                         }
    //                     }
    //                     var someCounter = Counter()
    //                     someCounter.incrementBy(5)`;

    // AST Explorer input:
    xit('should handle basic instance method definitions that use self, and their invocation', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "increment" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "EXPRESSION_OR_TYPE_KEYWORD", value: "self" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "incrementBy" },
        { type: "PARAMS_START",               value: "(" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "EXPRESSION_OR_TYPE_KEYWORD", value: "self" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "reset" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "EXPRESSION_OR_TYPE_KEYWORD", value: "self" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        {type: "DECLARATION_KEYWORD",         value: "var" },
        { type: "IDENTIFIER",                 value: "someCounter" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "someCounter" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "incrementBy" },
        { type: "INVOCATION_START",           value: "(" },
        { type: "NUMBER",                     value: "5" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`struct Counter {
    //                         var total = 0
    //                         mutating func increment() {
    //                             ++total
    //                         }
    //                         mutating func incrementBy(amount: Int) {
    //                             total += amount
    //                         }
    //                         mutating func reset() {
    //                             total = 0
    //                         }
    //                     }`;

    // AST Explorer input:
    xit('should handle basic struct mutating method definitions', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "mutating"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "increment" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "mutating"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "incrementBy" },
        { type: "PARAMS_START",               value: "(" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "amount" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "mutating"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "reset" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`struct Counter {
    //                         var total = 0
    //                         mutating func increment() {
    //                             self = Counter(total: ++total)
    //                         }
    //                     }`;

    // AST Explorer input:
    xit('should handle basic struct mutating methods that assign to self', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "struct" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "STRUCT_DEFINITION_START",    value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "mutating"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "increment" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "EXPRESSION_OR_TYPE_KEYWORD", value: "self" },
        { type: "OPERATOR",                   value: "=" },
        { type: "IDENTIFIER",                 value: "Counter" },
        { type: "INITIALIZATION_START",       value: "(" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "PUNCTUATION",                value: ":" },
        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "IDENTIFIER",                 value: "total" },
        { type: "INITIALIZATION_END",         value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STRUCT_DEFINITION_END",      value: "}" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class ParentClass {
    //                         static func returnTen() -> Int {
    //                             return 10
    //                         }
    //                         class func returnString() -> String {
    //                             return "my string"
    //                         }
    //                     }
    //                     ParentClass.returnTen()
    //                     ParentClass.returnString()`;

    // AST Explorer input:
    xit('should handle type methods declared with the static or class keyword', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "ParentClass" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "static"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "returnTen" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "RETURN_ARROW",               value: "->" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENT_KEYWORD",          value: "return"},
        { type: "NUMBER",                     value: "10" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "class"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "returnString" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "RETURN_ARROW",               value: "->" },
        { type: "TYPE_STRING",                value: "String" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENT_KEYWORD",          value: "return"},
        { type: "STRING",                     value: "my string" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "ParentClass" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "returnTen" },
        { type: "INVOCATION_START",           value: "(" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "ParentClass" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "IDENTIFIER",                 value: "returnString" },
        { type: "INVOCATION_START",           value: "(" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class SuperClass {
    //                         var a = 0
    //                         var b = 1
    //                         func incrementA() {
    //                             ++a
    //                         }
    //                         static func returnTen() -> Int {
    //                             return 10
    //                         }
    //                         class func returnString() -> String {
    //                             return "my string"
    //                         }
    //                     }
    //                     class SubClass: SuperClass {
    //                         var c = 2
    //                     }`

    // AST Explorer input:
    xit('should handle basic class inheritance', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "SuperClass" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "a" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "b" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "1" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "incrementA" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "IDENTIFIER",                 value: "a" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "static"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "returnTen" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "RETURN_ARROW",               value: "->" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENT_KEYWORD",          value: "return"},
        { type: "NUMBER",                     value: "10" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "class"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "returnString" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "RETURN_ARROW",               value: "->" },
        { type: "TYPE_STRING",                value: "String" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENT_KEYWORD",          value: "return"},
        { type: "STRING",                     value: "my string" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "SubClass" },
        { type: "INHERITANCE_OPERATOR",       value: ":" },
        { type: "IDENTIFIER",                 value: "SuperClass" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "c" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "2" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`class SuperClass {
    //                       var a = 0
    //                       var b = 1
    //                       func incrementA() {
    //                           ++a
    //                       }
    //                       static func returnTen() -> Int {
    //                           return 10
    //                       }
    //                       final func returnString() -> String {
    //                           return "my string"
    //                       }
    //                   }
    //                   class SubClass: SuperClass {
    //                       override func incrementA() {
    //                           a++
    //                       }
    //                   }`;

    // AST Explorer input:
    xit('should handle methods declared as final methods and methods that override inherited methods', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "SuperClass" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "a" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "0" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "b" },
        { type: "OPERATOR",                   value: "=" },
        { type: "NUMBER",                     value: "1" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "incrementA" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "IDENTIFIER",                 value: "a" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "static"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "returnTen" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "RETURN_ARROW",               value: "->" },
        { type: "TYPE_NUMBER",                value: "Int" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENT_KEYWORD",          value: "return"},
        { type: "NUMBER",                     value: "10" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "final"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "returnString" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "RETURN_ARROW",               value: "->" },
        { type: "TYPE_STRING",                value: "String" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENT_KEYWORD",          value: "return"},
        { type: "STRING",                     value: "my string" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "class" },
        { type: "IDENTIFIER",                 value: "SubClass" },
        { type: "INHERITANCE_OPERATOR",       value: ":" },
        { type: "IDENTIFIER",                 value: "SuperClass" },
        { type: "CLASS_DEFINITION_START",     value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "override"},
        { type: "DECLARATION_KEYWORD",        value: "func"},
        { type: "IDENTIFIER",                 value: "incrementA" },
        { type: "PARAMS_START",               value: "(" },
        { type: "PARAMS_END",                 value: ")" },
        { type: "STATEMENTS_START",           value: "{" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "IDENTIFIER",                 value: "a" },
        { type: "OPERATOR",                   value: "+" },
        { type: "OPERATOR",                   value: "+" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "STATEMENTS_END",             value: "}" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "CLASS_DEFINITION_END",       value: "}" },
        { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw`       class    SuperClass            {    var a = 0

    //                    var     b = 1   ;
    //                        func incrementA(){
    //                            ++a
    //                                                         }
    //                        static       func returnTen() -> Int {
    //                            return 10
    //                    }
    //                                              final func returnString()-> String     {
    //                            return "my string"
    //                         }
    //                    }
    //                    class  SubClass :  SuperClass {
    //                        override func  incrementA() {
    //                            a++ ;
    //                        }
    //                    }
    //                     var  someSuper            = SuperClass  ()

    //                            someSuper.a         ;someSuper.returnString() ;
    //                           `;

    // AST Explorer input:
    xit('should handle class declaration, initialization, property value lookups, and method calls with erratic spacing and inconsistent use of semi-colons', function () {
      input = [
         { type: "DECLARATION_KEYWORD",        value: "class" },
         { type: "IDENTIFIER",                 value: "SuperClass" },
         { type: "CLASS_DEFINITION_START",     value: "{" },
         { type: "DECLARATION_KEYWORD",        value: "var" },
         { type: "IDENTIFIER",                 value: "a" },
         { type: "OPERATOR",                   value: "=" },
         { type: "NUMBER",                     value: "0" },
         { type: "TERMINATOR",                 value: "\\n"},
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "DECLARATION_KEYWORD",        value: "var" },
         { type: "IDENTIFIER",                 value: "b" },
         { type: "OPERATOR",                   value: "=" },
         { type: "NUMBER",                     value: "1" },
         { type: "PUNCTUATION",                value: ";" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "DECLARATION_KEYWORD",        value: "func"},
         { type: "IDENTIFIER",                 value: "incrementA" },
         { type: "PARAMS_START",               value: "(" },
         { type: "PARAMS_END",                 value: ")" },
         { type: "STATEMENTS_START",           value: "{" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "OPERATOR",                   value: "+" },
         { type: "OPERATOR",                   value: "+" },
         { type: "IDENTIFIER",                 value: "a" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "STATEMENTS_END",             value: "}" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "DECLARATION_KEYWORD",        value: "static"},
         { type: "DECLARATION_KEYWORD",        value: "func"},
         { type: "IDENTIFIER",                 value: "returnTen" },
         { type: "PARAMS_START",               value: "(" },
         { type: "PARAMS_END",                 value: ")" },
         { type: "RETURN_ARROW",               value: "->" },
         { type: "TYPE_NUMBER",                value: "Int" },
         { type: "STATEMENTS_START",           value: "{" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "STATEMENT_KEYWORD",          value: "return"},
         { type: "NUMBER",                     value: "10" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "STATEMENTS_END",             value: "}" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "final"},
         { type: "DECLARATION_KEYWORD",        value: "func"},
         { type: "IDENTIFIER",                 value: "returnString" },
         { type: "PARAMS_START",               value: "(" },
         { type: "PARAMS_END",                 value: ")" },
         { type: "RETURN_ARROW",               value: "->" },
         { type: "TYPE_STRING",                value: "String" },
         { type: "STATEMENTS_START",           value: "{" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "STATEMENT_KEYWORD",          value: "return"},
         { type: "STRING",                     value: "my string" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "STATEMENTS_END",             value: "}" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "CLASS_DEFINITION_END",       value: "}" },
         { type: "TERMINATOR",                 value: "\\n"},
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "DECLARATION_KEYWORD",        value: "class" },
         { type: "IDENTIFIER",                 value: "SubClass" },
         { type: "INHERITANCE_OPERATOR",       value: ":" },
         { type: "IDENTIFIER",                 value: "SuperClass" },
         { type: "CLASS_DEFINITION_START",     value: "{" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "CONTEXT_SPECIFIC_KEYWORD",   value: "override"},
         { type: "DECLARATION_KEYWORD",        value: "func"},
         { type: "IDENTIFIER",                 value: "incrementA" },
         { type: "PARAMS_START",               value: "(" },
         { type: "PARAMS_END",                 value: ")" },
         { type: "STATEMENTS_START",           value: "{" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "IDENTIFIER",                 value: "a" },
         { type: "OPERATOR",                   value: "+" },
         { type: "OPERATOR",                   value: "+" },
         { type: "PUNCTUATION",                value: ";" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "STATEMENTS_END",             value: "}" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "CLASS_DEFINITION_END",       value: "}" },
         { type: "TERMINATOR",                 value: "\\n"},
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "DECLARATION_KEYWORD",        value: "var" },
         { type: "IDENTIFIER",                 value: "someSuper" },
         { type: "OPERATOR",                   value: "=" },
         { type: "IDENTIFIER",                 value: "SuperClass" },
         { type: "INITIALIZATION_START",       value: "(" },
         { type: "INITIALIZATION_END",         value: ")" },
         { type: "TERMINATOR",                 value: "\\n"},
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "IDENTIFIER",                 value: "someSuper" },
         { type: "DOT_SYNTAX",                 value: "." },
         { type: "IDENTIFIER",                 value: "a" },
         { type: "PUNCTUATION",                value: ";" },
         { type: "IDENTIFIER",                 value: "someSuper" },
         { type: "DOT_SYNTAX",                 value: "." },
         { type: "IDENTIFIER",                 value: "returnString" },
         { type: "INVOCATION_START",           value: "(" },
         { type: "INVOCATION_END",             value: ")" },
         { type: "PUNCTUATION",                value: ";" },
         { type: "TERMINATOR",                 value: "\\n"},

         { type: "TERMINATOR",                 value: "EOF"}
      ];
      output = "FILL_ME_IN";
      expect(R.equals(parser(input), output)).to.equal(true);
    });
  });

  xdescribe('Native Methods and Type Properties', function () {

    // input = String.raw`var name = "Joe"
    //                    var arr = [1,2]
    //                    var tup = (1,2)
    //                    print(name)
    //                    print("Hello, \(name)")
    //                    print(5 * (1 + 1))
    //                    print(arr[1])
    //                    print(tup.0)`;

    // AST Explorer input:
    // var name = "Joe"
    // var arr = [1,2]
    // var tup = {0: 1, 1: 2}
    // console.log(name)
    // console.log("Hello, \(name)")
    // console.log(5 * (1 + 1))
    // console.log(tup[0])
    xit('should handle calls to print', function () {
      input = [
        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "name" },
        { type: "OPERATOR",                   value: "=" },
        { type: "STRING",                     value: "Joe" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "arr" },
        { type: "OPERATOR",                   value: "=" },
        { type: "ARRAY_START",                value: "[" },
        { type: "NUMBER",                     value: "1" },
        { type: "PUNCTUATION",                value: "," },
        { type: "NUMBER",                     value: "2" },
        { type: "ARRAY_END",                  value: "]" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "DECLARATION_KEYWORD",        value: "var" },
        { type: "IDENTIFIER",                 value: "tup" },
        { type: "OPERATOR",                   value: "=" },
        { type: "TUPLE_START",                value: "(" },
        { type: "NUMBER",                     value: "1" },
        { type: "PUNCTUATION",                value: "," },
        { type: "NUMBER",                     value: "2" },
        { type: "TUPLE_END",                  value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "NATIVE_METHOD",              value: "print"},
        { type: "INVOCATION_START",           value: "(" },
        { type: "IDENTIFIER",                 value: "name" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "NATIVE_METHOD",              value: "print"},
        { type: "INVOCATION_START",           value: "(" },
        { type: "STRING",                     value: "Hello, " },
        { type: "STRING_INTERPOLATION_START", value: "\\(" },
        { type: "IDENTIFIER",                 value: "name" },
        { type: "STRING_INTERPOLATION_END",   value: ")" },
        { type: "STRING",                     value: "" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "NATIVE_METHOD",              value: "print"},
        { type: "INVOCATION_START",           value: "(" },
        { type: "NUMBER",                     value: "5" },
        { type: "OPERATOR",                   value: "*" },
        { type: "PUNCTUATION",                value: "(" },
        { type: "NUMBER",                     value: "1" },
        { type: "OPERATOR",                   value: "+" },
        { type: "NUMBER",                     value: "1" },
        { type: "PUNCTUATION",                value: ")" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "NATIVE_METHOD",              value: "print"},
        { type: "INVOCATION_START",           value: "(" },
        { type: "IDENTIFIER",                 value: "arr" },
        { type: "SUBSCRIPT_LOOKUP_START",     value: "[" },
        { type: "NUMBER",                     value: "1" },
        { type: "SUBSCRIPT_LOOKUP_END",       value: "]" },
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "\\n"},

        { type: "NATIVE_METHOD",              value: "print"},
        { type: "INVOCATION_START",           value: "(" },
        { type: "IDENTIFIER",                 value: "tup" },
        { type: "DOT_SYNTAX",                 value: "." },
        { type: "NUMBER",                     value: "0"},
        { type: "INVOCATION_END",             value: ")" },
        { type: "TERMINATOR",                 value: "EOF" }
      ];
      output = {
        "type": "Program",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "name"
                },
                "init": {
                  "type": "Literal",
                  "value": "Joe",
                  "raw": "\"Joe\""
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "tup"
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      },
                      "computed": false,
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "computed": false,
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "name": "log"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "name"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "name": "log"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Hello, (name)",
                  "raw": "\"Hello, \\(name)\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "name": "log"
                }
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "name": "log"
                }
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "tup"
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            }
          }
        ],
        "sourceType": "module"
      };
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw `var one = 1
    //                     var oneToString = String(one)
    //                     var oneBackToInt = Int(oneToString)
    //                     var twoTwo = "2.2"
    //                     var twoTwoToFloat = Float(twoTwo)
    //                     var twoTwoToDouble = Double(twoTwo)
    //                     var twoTwoBackToString = String(twoTwoToFloat)`;

    // AST Explorer input:
    // var one = -1
    // var oneToString = one.toString()
    // var oneBackToInt = Math.floor(+(oneToString))
    // var twoTwo = "2.2"
    // var twoTwoToFloat = +(twoTwo)
    // var twoTwoToDouble = +(twoTwo)
    // var twoTwoBackToString = twoTwoToFloat.toString()
    xit('should handle type conversion of strings, ints, floats, doubles', function () {
      input = [
       { type: "DECLARATION_KEYWORD",           value: "var" },
       { type: "IDENTIFIER",                    value: "one" },
       { type: "OPERATOR",                      value: "=" },
       { type: "NUMBER",                        value: "1" },
       { type: "TERMINATOR",                    value: "\\n"},

       { type: "DECLARATION_KEYWORD",           value: "var" },
       { type: "IDENTIFIER",                    value: "oneToString" },
       { type: "OPERATOR",                      value: "=" },
       { type: "TYPE_STRING",                   value: "String"},
       { type: "INVOCATION_START",              value: "(" },
       { type: "IDENTIFIER",                    value: "one" },
       { type: "INVOCATION_END",                value: ")" },
       { type: "TERMINATOR",                    value: "\\n"},

       { type: "DECLARATION_KEYWORD",           value: "var" },
       { type: "IDENTIFIER",                    value: "oneBackToInt" },
       { type: "OPERATOR",                      value: "=" },
       { type: "TYPE_NUMBER",                   value: "Int"},
       { type: "INVOCATION_START",              value: "(" },
       { type: "IDENTIFIER",                    value: "oneToString" },
       { type: "INVOCATION_END",                value: ")" },
       { type: "TERMINATOR",                    value: "\\n"},

       { type: "DECLARATION_KEYWORD",           value: "var" },
       { type: "IDENTIFIER",                    value: "twoTwo" },
       { type: "OPERATOR",                      value: "=" },
       { type: "STRING",                        value: "2.2" },
       { type: "TERMINATOR",                    value: "\\n"},

       { type: "DECLARATION_KEYWORD",           value: "var" },
       { type: "IDENTIFIER",                    value: "twoTwoToFloat" },
       { type: "OPERATOR",                      value: "=" },
       { type: "TYPE_NUMBER",                   value: "Float"},
       { type: "INVOCATION_START",              value: "(" },
       { type: "IDENTIFIER",                    value: "twoTwo" },
       { type: "INVOCATION_END",                value: ")" },
       { type: "TERMINATOR",                    value: "\\n"},

       { type: "DECLARATION_KEYWORD",           value: "var" },
       { type: "IDENTIFIER",                    value: "twoTwoToDouble" },
       { type: "OPERATOR",                      value: "=" },
       { type: "TYPE_NUMBER",                   value: "Double"},
       { type: "INVOCATION_START",              value: "(" },
       { type: "IDENTIFIER",                    value: "twoTwo" },
       { type: "INVOCATION_END",                value: ")" },
       { type: "TERMINATOR",                    value: "\\n"},

       { type: "DECLARATION_KEYWORD",           value: "var" },
       { type: "IDENTIFIER",                    value: "twoTwoBackToString" },
       { type: "OPERATOR",                      value: "=" },
       { type: "TYPE_STRING",                   value: "String"},
       { type: "INVOCATION_START",              value: "(" },
       { type: "IDENTIFIER",                    value: "twoTwoToFloat" },
       { type: "INVOCATION_END",                value: ")" },
       { type: "TERMINATOR",                    value: "EOF" }
      ];
      output = {
        "type": "Program",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "one"
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "oneToString"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "one"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "toString"
                    }
                  },
                  "arguments": []
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "oneBackToInt"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Math"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "floor"
                    }
                  },
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "operator": "+",
                      "argument": {
                        "type": "Identifier",
                        "name": "oneToString"
                      },
                      "prefix": true
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "twoTwo"
                },
                "init": {
                  "type": "Literal",
                  "value": "2.2",
                  "raw": "\"2.2\""
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "twoTwoToFloat"
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Identifier",
                    "name": "twoTwo"
                  },
                  "prefix": true
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "twoTwoToDouble"
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Identifier",
                    "name": "twoTwo"
                  },
                  "prefix": true
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "twoTwoBackToString"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "twoTwoToFloat"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "toString"
                    }
                  },
                  "arguments": []
                }
              }
            ],
            "kind": "var"
          }
        ],
        "sourceType": "module"
      };
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    // input = String.raw `var negOne = -1
    //                       var one = abs(negOne)`;

    // AST Explorer input:
    // var negOne = -1
    // var one = Math.abs(negOne)
    xit('should handle native absolute value method', function () {
      input = [
         { type: 'DECLARATION_KEYWORD',          value: 'var' },
         { type: 'IDENTIFIER',                   value: 'negOne' },
         { type: 'OPERATOR',                     value: '=' },
         { type: 'OPERATOR',                     value: '-' },
         { type: 'NUMBER',                       value: '1' },
         { type: 'TERMINATOR',                   value: '\\n' },

         { type: 'DECLARATION_KEYWORD',          value: 'var' },
         { type: 'IDENTIFIER',                   value: 'one' },
         { type: 'OPERATOR',                     value: '=' },
         { type: "NATIVE_METHOD",                value: "abs"},
         { type: "INVOCATION_START",             value: "(" },
         { type: "IDENTIFIER",                   value: "negOne" },
         { type: "INVOCATION_END",               value: ")" },
         { type: 'TERMINATOR',                   value: 'EOF' }
      ];
      output = {
        "type": "Program",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "negOne"
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "one"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Math"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "abs"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "negOne"
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          }
        ],
        "sourceType": "module"
      };
      expect(R.equals(parser(input), output)).to.equal(true);
    });

    xdescribe('Range Operations', function () {

      // Swift input: 'var a = 1...5'
      // AST Explorer input:
      xit('should handle closed ranges', function () {
        input = [
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "a" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "1" },
          { type: "CLOSED_RANGE",         value: "..." },
          { type: "NUMBER",               value: "5" },
          { type: "TERMINATOR",           value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // Swift input: 'var a = 1.0...5.0'
      // AST Explorer input:
      xit('should handle decimal ending in 0 closed ranges', function () {
        input = [
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "a" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "1.0" },
          { type: "CLOSED_RANGE",         value: "..." },
          { type: "NUMBER",               value: "5.0" },
          { type: "TERMINATOR",           value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // Swift input: 'var a = 1.2...5.3'
      // AST Explorer input:
      xit('should handle random decimal closed ranges', function () {
        input = [
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "a" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "1.2" },
          { type: "CLOSED_RANGE",         value: "..." },
          { type: "NUMBER",               value: "5.3" },
          { type: "TERMINATOR",           value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // Swift input: 'var b = 1..<5'
      // AST Explorer input:

      xit('should handle half-open ranges', function () {
        input = [
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "b" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "1" },
          { type: "HALF_OPEN_RANGE",      value: "..<" },
          { type: "NUMBER",               value: "5" },
          { type: "TERMINATOR",           value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // Swift input: 'var a = 1.0..<5.0'
      // AST Explorer input:

      xit('should handle decimal ending in 0 half-open ranges', function () {
        input = [
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "a" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "1.0" },
          { type: "HALF_OPEN_RANGE",      value: "..<" },
          { type: "NUMBER",               value: "5.0" },
          { type: "TERMINATOR",           value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // Swift input: 'var a = 1.2..<5.3'
      // AST Explorer input:

      xit('should handle random decimal half-open ranges', function () {
        input = [
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "a" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "1.2" },
          { type: "HALF_OPEN_RANGE",      value: "..<" },
          { type: "NUMBER",               value: "5.3" },
          { type: "TERMINATOR",           value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // Swift input: 'var a = 1...5; var b = 2..<6'
      // AST Explorer input:

      xit('should handle all ranges', function () {
        input = [
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "a" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "1" },
          { type: "CLOSED_RANGE",         value: "..." },
          { type: "NUMBER",               value: "5" },
          { type: "PUNCTUATION",          value: ";"},
          { type: "DECLARATION_KEYWORD",  value: "var" },
          { type: "IDENTIFIER",           value: "b" },
          { type: "OPERATOR",             value: "=" },
          { type: "NUMBER",               value: "2" },
          { type: "HALF_OPEN_RANGE",      value: "..<" },
          { type: "NUMBER",               value: "6" },
          { type: "TERMINATOR",           value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // Swift input: 'let start = 0; let end = 10; let range = start..<end; let fullRange = start...end;'
      // AST Explorer input:

      xit('should handle ranges delimited by identifiers', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "let" },
          { type: "IDENTIFIER",                 value: "start" },
          { type: "OPERATOR",                   value: "=" },
          { type: "NUMBER",                     value: "0" },
          { type: "PUNCTUATION",                value: ";" },
          { type: "DECLARATION_KEYWORD",        value: "let" },
          { type: "IDENTIFIER",                 value: "end" },
          { type: "OPERATOR",                   value: "=" },
          { type: "NUMBER",                     value: "10" },
          { type: "PUNCTUATION",                value: ";" },
          { type: "DECLARATION_KEYWORD",        value: "let" },
          { type: "IDENTIFIER",                 value: "range" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "start" },
          { type: "HALF_OPEN_RANGE",            value: "..<" },
          { type: "IDENTIFIER",                 value: "end" },
          { type: "PUNCTUATION",                value: ";" },
          { type: "DECLARATION_KEYWORD",        value: "let" },
          { type: "IDENTIFIER",                 value: "fullRange" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "start" },
          { type: "CLOSED_RANGE",               value: "..." },
          { type: "IDENTIFIER",                 value: "end" },
          { type: "PUNCTUATION",                value: ";" },
          { type: "TERMINATOR",                 value: "EOF"}
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });
    });

    xdescribe('String Properties and Methods', function () {

      // input = String.raw `var s = "my string, 123!"
      //                     for c in s.characters {
      //                         print(c)
      //                     }`;

      // AST Explorer input:
      // var s = "my string, 123!"
      // for (var c in s) {
      //     console.log(s[c])
      // }
      xit('should handle the String characters property', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "my string, 123!" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "STATEMENT_KEYWORD",          value: "for" },
          { type: "IDENTIFIER",                 value: "c" },
          { type: "STATEMENT_KEYWORD",          value: "in" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "characters" },
          { type: "PUNCTUATION",                value: "{" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "NATIVE_METHOD",              value: "print"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "c" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "PUNCTUATION",                value: "}" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "my string, 123!",
                    "raw": "\"my string, 123!\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ForInStatement",
              "left": {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "c"
                    },
                    "init": null
                  }
                ],
                "kind": "var"
              },
              "right": {
                "type": "Identifier",
                "name": "s"
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "console"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "log"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "c"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "each": false
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var s = "my string, 123!"
      //                     let fifteen = s.characters.count`;

      // AST Explorer input:
      // var s = "my string, 123!"
      // var fifteen = s.length
      xit('should handle the String count property', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "my string, 123!" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "let" },
          { type: "IDENTIFIER",                 value: "fifteen" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "characters" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "count" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "my string, 123!",
                    "raw": "\"my string, 123!\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "fifteen"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "s"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var s: String = ""
      //                     s.isEmpty`;

      // AST Explorer input:
      // var s = ""
      // s.length === 0
      xit('should handle the string isEmpty property', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "PUNCTUATION",                value: ":" },
          { type: "TYPE_STRING",                value: "String"},
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "isEmpty"},
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });


      // input = String.raw `var s = "my string, 123!"
      //                     var addChar: Character = "!"
      //                     s.append(addChar)`;

      // AST Explorer input:
      // var s = "my string, 123!"
      // var addChar = "!"
      // s += addChar
      // console.log(s)
      xit('should handle the String append method', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "my string, 123!" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "addChar" },
          { type: "PUNCTUATION",                value: ":" },
          { type: "TYPE_STRING",                value: "Character"},
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "!" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "append"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "addChar" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "my string, 123!",
                    "raw": "\"my string, 123!\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "addChar"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "!",
                    "raw": "\"!\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "Identifier",
                  "name": "s"
                },
                "right": {
                  "type": "Identifier",
                  "name": "addChar"
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "console"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "log"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "s"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw`var s = "my string, 123!"
      //                    var zero = s.startIndex
      //                    var one = s.startIndex.successor()
      //                    var two = s.startIndex.advancedBy(2)
      //                    var m = s[s.startIndex]
      //                    var y = s[s.startIndex.advancedBy(1)]
      //                    var fifteen = s.endIndex
      //                    var fourteen = s.endIndex.predecessor()
      //                    var bang = s[s.endIndex.predecessor()]`;

      // AST Explorer input:
      // var s = "my string, 123!"
      // var zero = 0
      // var one = (0 + 1)
      // var two = (0 + 2)
      // var m = s[0]
      // var y = s[(0 + 1)]
      // var fifteen = s.length
      // var fourteen = (s.length - 1)
      // var bang = s[(s.length - 1)]
      xit('should handle the String indices and their associated methods', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "my string, 123!" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "zero" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "one" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "successor"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "two" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "advancedBy"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "NUMBER",                     value: "2" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "m" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "SUBSCRIPT_LOOKUP_START",     value: "[" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "SUBSCRIPT_LOOKUP_END",       value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "y" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "SUBSCRIPT_LOOKUP_START",     value: "[" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "advancedBy"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "NUMBER",                     value: "1" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "SUBSCRIPT_LOOKUP_END",       value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "fifteen" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "endIndex" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "fourteen" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "endIndex" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "predecessor"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "bang" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "SUBSCRIPT_LOOKUP_START",     value: "[" },
          { type: "IDENTIFIER",                 value: "s" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "endIndex" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "predecessor"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "SUBSCRIPT_LOOKUP_END",       value: "]" },
          // { type: "TERMINATOR",                 value: "\\n"},

          // { type: "NATIVE_METHOD",              value: "print"},
          // { type: "INVOCATION_START",           value: "(" },
          // { type: "STRING",                     value: "the letter s: " },
          // { type: "STRING_INTERPOLATION_START", value: "\\(" },
          // { type: "IDENTIFIER",                 value: "s" },
          // { type: "SUBSCRIPT_LOOKUP_START",     value: "[" },
          // { type: "IDENTIFIER",                 value: "s" },
          // { type: "DOT_SYNTAX",                 value: "." },
          // { type: "TYPE_PROPERTY",              value: "startIndex" },
          // { type: "DOT_SYNTAX",                 value: "." },
          // { type: "NATIVE_METHOD",              value: "advancedBy"},
          // { type: "INVOCATION_START",           value: "(" },
          // { type: "NUMBER",                     value: "3" },
          // { type: "INVOCATION_END",             value: ")" },
          // { type: "SUBSCRIPT_LOOKUP_END",       value: "]" },
          // { type: "STRING_INTERPOLATION_END",   value: ")" },
          // { type: "STRING",                     value: "" },
          // { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "my string, 123!",
                    "raw": "\"my string, 123!\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "zero"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "one"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "two"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "s"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "s"
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "fifteen"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "s"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "fourteen"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "s"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "bang"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "s"
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw`var greeting = "World"
      //                     var firstPart = "Hello, "
      //                     greeting.insert("!", atIndex: greeting.endIndex)
      //                     greeting.insertContentsOf(firstPart.characters, at: greeting.startIndex)
      //                     greeting.removeAtIndex(greeting.endIndex.predecessor())
      //                     var range = greeting.startIndex...greeting.startIndex.advancedBy(6)
      //                     greeting.removeRange(range)`;

      // AST Explorer input:
      xit('should handle the String methods for inserting and removing characters', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "World" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "firstPart" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "Hello, " },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "insert"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "STRING",                     value: "!" },
          { type: "PUNCTUATION",                value: "," },
          { type: "METHOD_ARGUMENT_NAME",       value: "atIndex" },
          { type: "PUNCTUATION",                value: ":" },
          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "endIndex" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "insertContentsOf"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "firstPart" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "characters" },
          { type: "PUNCTUATION",                value: "," },
          { type: "METHOD_ARGUMENT_NAME",       value: "at" },
          { type: "PUNCTUATION",                value: ":" },
          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "removeAtIndex"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "endIndex" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "predecessor"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "range" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "CLOSED_RANGE",               value: "..." },
          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "startIndex" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "advancedBy"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "NUMBER",                     value: "6" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "greeting" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "removeRange"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "range" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var famousAuthor = "F. Scott Fitzgerald"
      //                     print(famousAuthor.hasPrefix("F. Scott"))
      //                     var famousDriver = "Dale Earnhardt, Jr."
      //                     print(famousDriver.hasSuffix("Jr."))`;

      // AST Explorer input:
      // var famousAuthor = "F. Scott Fitzgerald"
      // console.log(/^F. Scott/.test(famousAuthor))
      // var famousDriver = "Dale Earnhardt, Jr."
      // console.log(/Jr.$/.test(famousDriver))
      xit('should handle the has prefix and has suffix string methods', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "famousAuthor" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "F. Scott Fitzgerald" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "NATIVE_METHOD",              value: "print"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "famousAuthor" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "hasPrefix"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "STRING",                     value: "F. Scott" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "famousDriver" },
          { type: "OPERATOR",                   value: "=" },
          { type: "STRING",                     value: "Dale Earnhardt, Jr." },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "NATIVE_METHOD",              value: "print"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "famousDriver" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "hasSuffix"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "STRING",                     value: "Jr." },
          { type: "INVOCATION_END",             value: ")" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "famousAuthor"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "F. Scott Fitzgerald",
                    "raw": "\"F. Scott Fitzgerald\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "console"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "log"
                  }
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Literal",
                        "value": {},
                        "raw": "/^F. Scott/",
                        "regex": {
                          "pattern": "^F. Scott",
                          "flags": ""
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "test"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "famousAuthor"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "famousDriver"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "Dale Earnhardt, Jr.",
                    "raw": "\"Dale Earnhardt, Jr.\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "console"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "log"
                  }
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Literal",
                        "value": {},
                        "raw": "/Jr.$/",
                        "regex": {
                          "pattern": "Jr.$",
                          "flags": ""
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "test"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "famousDriver"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var s = "String"
      //                       s.uppercaseString
      //                       s.lowercaseString`;

      // AST Explorer input:
      // var s = "String"
      // s.toUpperCase()
      // s.toLowerCase()
      xit('should handle string uppercase and lowercase properties', function () {
        input = [
           { type: 'DECLARATION_KEYWORD',          value: 'var' },
           { type: 'IDENTIFIER',                   value: 's' },
           { type: 'OPERATOR',                     value: '=' },
           { type: 'STRING',                       value: 'String' },
           { type: 'TERMINATOR',                   value: '\\n' },

           { type: 'IDENTIFIER',                   value: 's' },
           { type: "DOT_SYNTAX",                   value: "." },
           { type: "TYPE_PROPERTY",                value: "uppercaseString" },
           { type: 'TERMINATOR',                   value: '\\n' },

           { type: 'IDENTIFIER',                   value: 's' },
           { type: "DOT_SYNTAX",                   value: "." },
           { type: "TYPE_PROPERTY",                value: "lowercaseString" },
           { type: 'TERMINATOR',                   value: 'EOF' }
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "String",
                    "raw": "\"String\""
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "toUpperCase"
                  }
                },
                "arguments": []
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "toLowerCase"
                  }
                },
                "arguments": []
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });
    });

    xdescribe('Collection Properties and Methods', function () {

      // input = String.raw `var arr = [1,2]
      //                     arr.append(3)`;

      // AST Explorer input:
      // var arr = [1,2]
      // arr.push(3)
      xit('should handle the array append method', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "arr" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "[" },
          { type: "NUMBER",                     value: "1" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "2" },
          { type: "ARRAY_END",                  value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "append"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "NUMBER",                     value: "3" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var arr = [1,2]
      //                     arr.count`;

      // AST Explorer input:
      // var arr = [1,2]
      // arr.length
      xit('should handle the array count property', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "arr" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "[" },
          { type: "NUMBER",                     value: "1" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "2" },
          { type: "ARRAY_END",                  value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "count"},
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "property": {
                  "type": "Identifier",
                  "name": "length"
                }
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var arr = [Int]()
      //                     arr.isEmpty`;

      // AST Explorer input:
      xit('should handle the array isEmpty property', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "arr" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "["},
          { type: "TYPE_NUMBER",                value: "Int"},
          { type: "ARRAY_END",                  value: "]"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "TYPE_PROPERTY",              value: "isEmpty"},
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var arrOfThreeZeros = [Int](count: 3, repeatedValue: 0)`;

      // AST Explorer input:
      // var arr = []
      // (arr.length === 0)
      xit('should handle array initialization with a default value', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "arrOfThreeZeros" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "["},
          { type: "TYPE_NUMBER",                value: "Int"},
          { type: "ARRAY_END",                  value: "]"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "TYPE_PROPERTY",              value: "count"},
          { type: "PUNCTUATION",                value: ":" },
          { type: "NUMBER",                     value: "3" },
          { type: "PUNCTUATION",                value: "," },
          { type: "METHOD_ARGUMENT_NAME",       value: "repeatedValue"},
          { type: "PUNCTUATION",                value: ":" },
          { type: "NUMBER",                     value: "0" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "ArrayExpression",
                      "elements": []
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "arr"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var arr = [1,2,4,8,5,7]
      //                     arr.insert(3, atIndex: 2)
      //                     var eight = arr.removeAtIndex(4)
      //                     arr.removeLast()
      //                     var arrTwo = [6,7,8,9,10]
      //                     arr.insertContentsOf(arrTwo, at: 5)
      //                     var one = arr.removeFirst()
      //                     arr.popLast()
      //                     arr.removeAll()`;

      // AST Explorer input:
      // var arr = [1,2,4,8,5,7]
      // arr.splice(2, 0, 3)
      // var eight = arr.splice(4, 1)[0]
      // arr.pop()
      // var arrTwo = [6,7,8,9,10]
      // Array.prototype.splice.apply(arr, [5, 0].concat(arrTwo))
      // var one = arr.shift()
      // arr.pop()
      // arr = []
      xit('should handle the array insertion and removal methods', function () {
        input = [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "arr" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "[" },
          { type: "NUMBER",                     value: "1" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "2" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "4" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "8" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "5" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "7" },
          { type: "ARRAY_END",                  value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "insert"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "NUMBER",                     value: "3" },
          { type: "PUNCTUATION",                value: "," },
          { type: "METHOD_ARGUMENT_NAME",       value: "atIndex" },
          { type: "PUNCTUATION",                value: ":" },
          { type: "NUMBER",                     value: "2" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "eight" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "removeAtIndex"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "NUMBER",                     value: "4" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "removeLast"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "arrTwo" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "[" },
          { type: "NUMBER",                     value: "6" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "7" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "8" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "9" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "10" },
          { type: "ARRAY_END",                  value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "insertContentsOf"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "IDENTIFIER",                 value: "arrTwo" },
          { type: "PUNCTUATION",                value: "," },
          { type: "METHOD_ARGUMENT_NAME",       value: "at" },
          { type: "PUNCTUATION",                value: ":" },
          { type: "NUMBER",                     value: "5" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "one" },
          { type: "OPERATOR",                   value: "=" },
          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "removeFirst"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "popLast"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "DOT_SYNTAX",                 value: "." },
          { type: "NATIVE_METHOD",              value: "removeAll"},
          { type: "INVOCATION_START",           value: "(" },
          { type: "INVOCATION_END",             value: ")" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4"
                      },
                      {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8"
                      },
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5"
                      },
                      {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "splice"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "eight"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "arr"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "splice"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4"
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "pop"
                  }
                },
                "arguments": []
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "arrTwo"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6"
                      },
                      {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7"
                      },
                      {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8"
                      },
                      {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9"
                      },
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "Array"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "prototype"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "splice"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "apply"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5"
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "concat"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "arrTwo"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "one"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "arr"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "shift"
                      }
                    },
                    "arguments": []
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "arr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "pop"
                  }
                },
                "arguments": []
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": []
                }
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var arr = [1,2,3,4,5,6,7]
      //                     arr[0...3] = [0]
      //                     arr[0..<9] = [5,6,7]`;

      // AST Explorer input:
      xit('should handle subscript syntax ranges to change many array values where replacement array has different length than range', function () {
        input =  [
          { type: "DECLARATION_KEYWORD",        value: "var" },
          { type: "IDENTIFIER",                 value: "arr" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "[" },
          { type: "NUMBER",                     value: "1" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "2" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "3" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "4" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "5" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "6" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "7" },
          { type: "ARRAY_END",                  value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "SUBSCRIPT_LOOKUP_START",     value: "[" },
          { type: "NUMBER",                     value: "0" },
          { type: "CLOSED_RANGE",               value: "..." },
          { type: "NUMBER",                     value: "3" },
          { type: "SUBSCRIPT_LOOKUP_END",       value: "]" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "[" },
          { type: "NUMBER",                     value: "0" },
          { type: "ARRAY_END",                  value: "]" },
          { type: "TERMINATOR",                 value: "\\n"},

          { type: "IDENTIFIER",                 value: "arr" },
          { type: "SUBSCRIPT_LOOKUP_START",     value: "[" },
          { type: "NUMBER",                     value: "0" },
          { type: "HALF_OPEN_RANGE",            value: "..<" },
          { type: "NUMBER",                     value: "9" },
          { type: "SUBSCRIPT_LOOKUP_END",       value: "]" },
          { type: "OPERATOR",                   value: "=" },
          { type: "ARRAY_START",                value: "[" },
          { type: "NUMBER",                     value: "5" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "6" },
          { type: "PUNCTUATION",                value: "," },
          { type: "NUMBER",                     value: "7" },
          { type: "ARRAY_END",                  value: "]" },
          { type: "TERMINATOR",                 value: "EOF"},
        ];
        output = "FILL_ME_IN";
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var d = ["array1": [1,2,3], "array2": [4,5,6]]
      //                     d.count`;

      // AST Explorer input:
      // var d = {"array1": [1,2,3], "array2": [4,5,6]}
      // Object.keys(d).length
      xit('should the dictionary count property', function () {
        input = [
          { type: "DECLARATION_KEYWORD",          value: "var" },
          { type: "IDENTIFIER",                   value: "d" },
          { type: "OPERATOR",                     value: "=" },
          { type: "DICTIONARY_START",             value: "[" },
          { type: "STRING",                       value: "array1" },
          { type: "PUNCTUATION",                  value: ":" },
          { type: "ARRAY_START",                  value: "[" },
          { type: "NUMBER",                       value: "1" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "2" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "3" },
          { type: "ARRAY_END",                    value: "]" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "STRING",                       value: "array2" },
          { type: "PUNCTUATION",                  value: ":" },
          { type: "ARRAY_START",                  value: "[" },
          { type: "NUMBER",                       value: "4" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "5" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "6" },
          { type: "ARRAY_END",                    value: "]" },
          { type: "DICTIONARY_END",               value: "]" },
          { type: "TERMINATOR",                   value: "\\n"},

          { type: "IDENTIFIER",                   value: "d" },
          { type: "DOT_SYNTAX",                   value: "." },
          { type: "TYPE_PROPERTY",                value: "count" },
          { type: "TERMINATOR",                   value: "EOF" }
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "array1",
                          "raw": "\"array1\""
                        },
                        "computed": false,
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            }
                          ]
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "array2",
                          "raw": "\"array2\""
                        },
                        "computed": false,
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4"
                            },
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5"
                            },
                            {
                              "type": "Literal",
                              "value": 6,
                              "raw": "6"
                            }
                          ]
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "keys"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "d"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "length"
                }
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var d = ["array1": [1,2,3], "array2": [4,5,6]]
      //                     d.updateValue([1], forKey: "array1")`;

      // AST Explorer input:
      // var d = {"array1": [1,2,3], "array2": [4,5,6]}
      // d.array1 = [1];
      xit('should the dictionary update value method', function () {
        input = [
          { type: "DECLARATION_KEYWORD",          value: "var" },
          { type: "IDENTIFIER",                   value: "d" },
          { type: "OPERATOR",                     value: "=" },
          { type: "DICTIONARY_START",             value: "[" },
          { type: "STRING",                       value: "array1" },
          { type: "PUNCTUATION",                  value: ":" },
          { type: "ARRAY_START",                  value: "[" },
          { type: "NUMBER",                       value: "1" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "2" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "3" },
          { type: "ARRAY_END",                    value: "]" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "STRING",                       value: "array2" },
          { type: "PUNCTUATION",                  value: ":" },
          { type: "ARRAY_START",                  value: "[" },
          { type: "NUMBER",                       value: "4" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "5" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "6" },
          { type: "ARRAY_END",                    value: "]" },
          { type: "DICTIONARY_END",               value: "]" },
          { type: "TERMINATOR",                   value: "\\n"},

          { type: "IDENTIFIER",                   value: "d" },
          { type: "DOT_SYNTAX",                   value: "." },
          { type: "NATIVE_METHOD",                value: "updateValue" },
          { type: "INVOCATION_START",             value: "(" },
          { type: "ARRAY_START",                  value: "[" },
          { type: "NUMBER",                       value: "1" },
          { type: "ARRAY_END",                    value: "]" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "METHOD_ARGUMENT_NAME",         value: "forKey" },
          { type: "PUNCTUATION",                  value: ":" },
          { type: "STRING",                       value: "array1" },
          { type: "INVOCATION_END",               value: ")" },
          { type: "TERMINATOR",                   value: "EOF" }
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "array1",
                          "raw": "\"array1\""
                        },
                        "computed": false,
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            }
                          ]
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "array2",
                          "raw": "\"array2\""
                        },
                        "computed": false,
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4"
                            },
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5"
                            },
                            {
                              "type": "Literal",
                              "value": 6,
                              "raw": "6"
                            }
                          ]
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "array1"
                  }
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });

      // input = String.raw `var d = ["array1": [1,2,3], "array2": [4,5,6]]
      //                     d.removeValueForKey("array1")`;

      // AST Explorer input:
      // var d = {"array1": [1,2,3], "array2": [4,5,6]}
      // delete d.array1
      xit('should the dictionary remove value for key method', function () {
        input = [
          { type: "DECLARATION_KEYWORD",          value: "var" },
          { type: "IDENTIFIER",                   value: "d" },
          { type: "OPERATOR",                     value: "=" },
          { type: "DICTIONARY_START",             value: "[" },
          { type: "STRING",                       value: "array1" },
          { type: "PUNCTUATION",                  value: ":" },
          { type: "ARRAY_START",                  value: "[" },
          { type: "NUMBER",                       value: "1" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "2" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "3" },
          { type: "ARRAY_END",                    value: "]" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "STRING",                       value: "array2" },
          { type: "PUNCTUATION",                  value: ":" },
          { type: "ARRAY_START",                  value: "[" },
          { type: "NUMBER",                       value: "4" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "5" },
          { type: "PUNCTUATION",                  value: "," },
          { type: "NUMBER",                       value: "6" },
          { type: "ARRAY_END",                    value: "]" },
          { type: "DICTIONARY_END",               value: "]" },
          { type: "TERMINATOR",                   value: "\\n"},

          { type: "IDENTIFIER",                   value: "d" },
          { type: "DOT_SYNTAX",                   value: "." },
          { type: "NATIVE_METHOD",                value: "removeValueForKey" },
          { type: "INVOCATION_START",             value: "(" },
          { type: "STRING",                       value: "array1" },
          { type: "INVOCATION_END",               value: ")" },
          { type: "TERMINATOR",                   value: "EOF" }
        ];
        output = {
          "type": "Program",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "array1",
                          "raw": "\"array1\""
                        },
                        "computed": false,
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            }
                          ]
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "array2",
                          "raw": "\"array2\""
                        },
                        "computed": false,
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4"
                            },
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5"
                            },
                            {
                              "type": "Literal",
                              "value": 6,
                              "raw": "6"
                            }
                          ]
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "delete",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "array1"
                  }
                },
                "prefix": true
              }
            }
          ],
          "sourceType": "module"
        };
        expect(R.equals(parser(input), output)).to.equal(true);
      });
    });
  });
});
