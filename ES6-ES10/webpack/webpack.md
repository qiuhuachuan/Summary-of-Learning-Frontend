本质上，`webpack` 是一个现代 JavaScript 应用程序的静态模块打包工具。当 webpack 处理应用程序时，它会在内部构件一个`依赖图（dependency graph）`，此依赖图会映射项目所需的每个模块，并生成一个或多个 `bundle`。

入口（entry）
入口起点（entry point）告诉 webpack 哪个是原始文件。找到这个原始文件之后开始寻找依赖包和各种资源，根据这些包还有资源，选择合适的 loader 进行处理。这个入口是需要在 webpack 的配置文件（webpack.config.js）中来声明的。

出口（output）
所谓的出口（output）是告诉 webpack 经过各种 loader 处理后的文件应该生成到哪个目录下，也就是生成文件所在的地方。同样，需要显式地告诉 webpack 的配置文件（webpack.config.js）。

loader
构建的过程处理原生的 JavaScript，还需要处理其他非 JavaScript 文件，比如图片、CSS、ES6 等等。webpack loader 的作用就是提供一个机制能保证所有的类型资源都可以采用对应的 loader 进行处理，这样 webpack 就能完成更加复杂的构建过程。而这个 loader 也是需要在配置文件（webpack.config.js）中配置的。

插件（plugins）
loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。

模式
平时会存在两种状态：开发模式、生产模式。
通过选择 development 或 production 之中的一个，来设置 `mode` 参数，你可以启用相应模式下的 webpack 内置的优化。
