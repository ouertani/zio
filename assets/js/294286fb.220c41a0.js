"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[25602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),g=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=g(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=g(n),u=a,m=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?o.createElement(m,r(r({ref:t},s),{},{components:n})):o.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var g=2;g<i;g++)r[g]=n[g];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var o=n(87462),a=(n(67294),n(3905));const i={id:"create-custom-logger-for-a-zio-application",title:"Tutorial: How to Create a Custom Logger for a ZIO Application?",sidebar_label:"Create Custom Logger for a ZIO Application"},r=void 0,l={unversionedId:"guides/tutorials/create-custom-logger-for-a-zio-application",id:"guides/tutorials/create-custom-logger-for-a-zio-application",title:"Tutorial: How to Create a Custom Logger for a ZIO Application?",description:"Introduction",source:"@site/docs/guides/tutorials/create-custom-logger-for-a-zio-application.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/create-custom-logger-for-a-zio-application",permalink:"/guides/tutorials/create-custom-logger-for-a-zio-application",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/create-custom-logger-for-a-zio-application.md",tags:[],version:"current",frontMatter:{id:"create-custom-logger-for-a-zio-application",title:"Tutorial: How to Create a Custom Logger for a ZIO Application?",sidebar_label:"Create Custom Logger for a ZIO Application"},sidebar:"guides-sidebar",previous:{title:"Enable Logging in a ZIO Application",permalink:"/guides/tutorials/enable-logging-in-a-zio-application"},next:{title:"Running Our First ZIO Project With VSCode",permalink:"/guides/tutorials/run-our-first-zio-project-with-vscode"}},p={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Running the Examples",id:"running-the-examples",level:2},{value:"Creating a Custom Logger",id:"creating-a-custom-logger",level:2},{value:"Using SLF4J Logger in a ZIO Application",id:"using-slf4j-logger-in-a-zio-application",level:2},{value:"Adding a Simple SLF4J Binding to the Classpath",id:"adding-a-simple-slf4j-binding-to-the-classpath",level:2},{value:"Switching to the Reload4j Logging Framework",id:"switching-to-the-reload4j-logging-framework",level:2},{value:"Switching to the Logback Logging Framework",id:"switching-to-the-logback-logging-framework",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:g},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"As we have seen in the ",(0,a.kt)("a",{parentName:"p",href:"/guides/tutorials/enable-logging-in-a-zio-application"},"previous tutorial"),", ZIO has a variety of built-in logging facilities. Also, it has a default logger that can be used to print log messages to the console. When we go to production, we may want to use a different logger with a customized configuration. For example, we may want to log to a file or a database instead of the console."),(0,a.kt)("p",null,"In this tutorial, we are going to see how we can create a custom logger for a ZIO application."),(0,a.kt)("h2",{id:"running-the-examples"},"Running the Examples"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/guides/tutorials/enable-logging-in-a-zio-application"},"this article"),", we enabled logging for ",(0,a.kt)("inlineCode",{parentName:"p"},"UserApp")," http application. In this tutorial, we are going to create a custom logger for the ",(0,a.kt)("inlineCode",{parentName:"p"},"UserApp"),"."),(0,a.kt)("p",null,"To run the code, clone the repository and checkout the ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstarts")," project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:zio/zio-quickstarts.git \n$ cd zio-quickstarts/zio-quickstart-restful-webservice-custom-logger\n")),(0,a.kt)("p",null,"And finally, run the application using sbt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbt run\n")),(0,a.kt)("h2",{id:"creating-a-custom-logger"},"Creating a Custom Logger"),(0,a.kt)("p",null,"To create a new logger for the ZIO application, we need to create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLogger")," object. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLogger")," is a trait that defines the interface for a ZIO logger. The default logger has implemented this trait through the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLogger.default")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval logger: ZLogger[String, Unit] =\n  new ZLogger[String, Unit] {\n    override def apply(\n      trace: Trace,\n      fiberId: FiberId,\n      logLevel: LogLevel,\n      message: () => String,\n      cause: Cause[Any],\n      context: FiberRefs,\n      spans: List[LogSpan],\n      annotations: Map[String, String]\n    ): Unit =\n      println(s"${java.time.Instant.now()} - ${logLevel.label} - ${message()}")\n  }\n')),(0,a.kt)("p",null,"So then, we can remove all the default loggers and replace them with our custom logger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  val logger: ZLogger[String, Unit] =\n    new ZLogger[String, Unit] {\n      override def apply(\n        trace: Trace,\n        fiberId: FiberId,\n        logLevel: LogLevel,\n        message: () => String,\n        cause: Cause[Any],\n        context: FiberRefs,\n        spans: List[LogSpan],\n        annotations: Map[String, String]\n      ): Unit =\n        println(s"${java.time.Instant.now()} - ${logLevel.label} - ${message()}")\n    }\n\n  override val bootstrap = Runtime.removeDefaultLoggers ++ Runtime.addLogger(logger)\n\n  def run =\n    for {\n      _ <- ZIO.log("Application started!")\n      _ <- ZIO.log("Another log message.")\n      _ <- ZIO.log("Application stopped!")\n    } yield ()\n}\n')),(0,a.kt)("p",null,"By running this application, the log messages will be printed like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"2022-06-04T13:49:19.554648Z - INFO - Application started!\n2022-06-04T13:49:19.567854Z - INFO - Another log message.\n2022-06-04T13:49:19.568831Z - INFO - Application stopped!\n")),(0,a.kt)("h2",{id:"using-slf4j-logger-in-a-zio-application"},"Using SLF4J Logger in a ZIO Application"),(0,a.kt)("p",null,"So far, we learned how to write a custom logger for a ZIO application. Now, in this section, we want to add SLF4J Logging support to the ",(0,a.kt)("inlineCode",{parentName:"p"},"UserApp")," we have developed in the ",(0,a.kt)("a",{parentName:"p",href:"/guides/quickstarts/restful-webservice"},"Restful Web Service")," quickstart."),(0,a.kt)("p",null,"SLF4J is a logging facade that decouples our application code from any underlying logging implementation. To enable SLF4J logging for a ZIO application, we need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLogger")," trait using SLF4J. Fortunately, the ZIO Logging project has done this for us."),(0,a.kt)("p",null,"So we can simply add this library to our project by adding the following dependencies to our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging"       % "2.0.0"\nlibraryDependencies += "dev.zio" %% "zio-logging-slf4j" % "2.0.0"\n')),(0,a.kt)("p",null,"Now we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"SLF4J.sl4j")," layer to enable SLF4J logging:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.logging.LogFormat\nimport zio.logging.backend.SLF4J\n\nobject MainApp extends ZIOAppDefault {\n  override val bootstrap = SLF4J.slf4j(LogLevel.Info, LogFormat.colored)\n\n  def run = ZIO.log("Application started!")\n}\n')),(0,a.kt)("p",null,"Let's run the application and see the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".\nSLF4J: Defaulting to no-operation (NOP) logger implementation\nSLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.\n')),(0,a.kt)("p",null,"Oops! The SLF4J failed to find any binding in the classpath. To fix this, we need to add an SLF4J binding to our classpath."),(0,a.kt)("h2",{id:"adding-a-simple-slf4j-binding-to-the-classpath"},"Adding a Simple SLF4J Binding to the Classpath"),(0,a.kt)("p",null,"The SLF4J has a simple binding that can be used by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"slf4j-simple")," dependency to our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "org.slf4j" % "slf4j-simple" % "1.7.36"\n')),(0,a.kt)("p",null,"And then we can run the application again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[ZScheduler-Worker-7] INFO zio-slf4j-logger - timestamp=2022-06-04T19:36:43.768256+04:30 level=INFO thread=zio-fiber-6 message="Application started!"\n')),(0,a.kt)("p",null,"It works! Now, our ZIO application uses SLF4J for its logging backend."),(0,a.kt)("p",null,"Similarly, we can bind our application to any other logging framework by adding the appropriate dependency to our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slf4j-log4j12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slf4j-reload4j")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slf4j-jdk14")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slf4j-nop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slf4j-jcl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logback-classic"))),(0,a.kt)("p",null,"To switch to another logging framework, we need to provide one of the above dependencies instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"slf4j-simple"),". In the next section, we will learn how to switch to the ",(0,a.kt)("inlineCode",{parentName:"p"},"reload4j")," logging framework."),(0,a.kt)("h2",{id:"switching-to-the-reload4j-logging-framework"},"Switching to the Reload4j Logging Framework"),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"reload4j")," logging framework, we need to add the following dependencies to our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'- libraryDependencies += "org.slf4j" % "slf4j-simple" % "1.7.36"\n+ libraryDependencies += "org.slf4j" % "slf4j-reload4j" % "1.7.36" \n')),(0,a.kt)("p",null,"Now we can configure our logger by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"log4j.properties")," to the resources directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"log4j.rootLogger = Info, consoleAppender\nlog4j.appender.consoleAppender=org.apache.log4j.ConsoleAppender\nlog4j.appender.consoleAppender.layout=org.apache.log4j.PatternLayout\nlog4j.appender.consoleAppender.layout.ConversionPattern=[%p] %d %c %M - %m%n\n")),(0,a.kt)("p",null,"By customizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConversionPattern")," we can control the format of the log messages."),(0,a.kt)("h2",{id:"switching-to-the-logback-logging-framework"},"Switching to the Logback Logging Framework"),(0,a.kt)("p",null,"In the same way, we can switch to the ",(0,a.kt)("inlineCode",{parentName:"p"},"logback-classic")," logging framework by adding the following dependencies to our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'- libraryDependencies += "org.slf4j"      % "slf4j-reload4j"  % "1.7.36"\n+ libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.2.11"\n')),(0,a.kt)("p",null,"Then we can configure our logger by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"logback.xml")," to the resources directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<configuration>\n    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n        <encoder>\n            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>\n        </encoder>\n    </appender>\n    <root level="info">\n        <appender-ref ref="STDOUT"/>\n    </root>\n</configuration>\n')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we have learned how to create a custom logger for a ZIO application. We also covered how to add SLF4J logging support instead of default ZIO logging."),(0,a.kt)("p",null,"All the source code associated with this article is available on the ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstart")," project."))}d.isMDXComponent=!0}}]);