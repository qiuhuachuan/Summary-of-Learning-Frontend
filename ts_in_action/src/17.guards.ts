enum Type {
  Strong,
  Weak
}

class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()

  // 4 创建保护函数
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  // if ((lang as Java).helloJava) { // 这种方法会报错
  //   ;(lang as Java).helloJava()
  // } else {
  //   ;(lang as JavaScript).helloJavaScript()
  // }

  // 1 instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 2 in 存在报错
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 3 typeof
  if (typeof x === 'string') {
    console.log(x.length)
  } else {
    console.log(x.toFixed(2))
  }
  return lang
}

getLanguage(Type.Weak, 100.964)
