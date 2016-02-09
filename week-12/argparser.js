'use strict';

var ARG_START = ' -';
//konstans - olyan valtozo aminek az erteke nem valtozik meg a prg futasa soran
function parseArguments(string) {
  var args = string.split(ARG_START).slice(1);
  //a stringen meghivom a split f-t ay argstartal felparameterezve,
  //elso parametere alapjan szetvagja a stringet
  return args.reduce(parseOneArg, {});
}

function parseOneArg(parsedArgument, argument) {
  parsedArgument[getArgumentName(argument)] = getArgumentValue(argument);
  return parsedArgument;
}

function getArgumentName(argument) {
  return argument[0];
}

function getArgumentValue(argument) {
  var param = argument.substring(2);
  if (!isNumber(param)) {
    return parseFloat(param);
  }
  return param || true;
}

function isNumber(string) {
  return Number.isNaN(parseFloat(string));
}
