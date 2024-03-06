export function dollarFormatter(value) {
  return `$ ${value.toFixed(2)}`
}


export function toKebabCase(value) {
  return value.replace(/\s/g, "-").toLowerCase()
}
