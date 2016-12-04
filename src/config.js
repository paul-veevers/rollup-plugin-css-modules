export const pluginName = 'rollup-plugin-css-module'
export const defaultTreeshakeOpts = {
  error: false, // prevent build from continuing
  warn: true, // display a warning
  remove: true // remove from compiled css
}
export const jsReservedNames = ['break', 'do', 'instanceof', 'typeof', 'case', 'else', 'new', 'var', 'catch', 'finally', 'return', 'void', 'continue', 'for', 'switch', 'while', 'debugger', 'function', 'this', 'with', 'default', 'if', 'throw', 'delete', 'in', 'try', 'class', 'enum', 'extends', 'super', 'const', 'export', 'import']
export const logErrs = {
  namingWarn: 'NamingWarning: export name {{oldName}} has been changed to {{newName}}. Either because it\'s a Javascript reserved word or it has a \'-\' in it. To turn off this warning set suppressNamingWarning: true',
  unusedWarn: 'UnusedWarning: export name {{export}} is not used ({{file}})',
  unusedErr: 'UnusedError: stopping build due to unused css exports. If you would like to continue build in future set treeshake.error: false'
}
