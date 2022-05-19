import Root from "./components"
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";


const productPage = {
  name: "product",
  priority: 10,
  pattern: "/product/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isProduct: true
    })
  }
}

const aboutPage = {
  name: "about",
  priority: 10,
  pattern: "/about/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAbout: true
    })
  }
}

const faqPage = {
  name: "faq",
  priority: 10,
  pattern: "/faq/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isFAQ: true
    })
  }
}

const blogPage = {
  name: "blog",
  priority: 10,
  pattern: "/blog/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isBlog: true
    })
  }
}

const detailPage = {
  name: "detail",
  priority: 10,
  pattern: "/detail/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isBlogDetail: true
    })
  }
}

const orderPage = {
  name: "order",
  priority: 10,
  pattern: "/order/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isOrder: true
    })
  }
}

const sliderPage = {
  name: "slider",
  priority: 10,
  pattern: "/slider/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isSlider: true
    })
  }
}

const lbTheme = {
  name: "lb",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(productPage)
        libraries.source.handlers.push(aboutPage)
        libraries.source.handlers.push(faqPage)
        libraries.source.handlers.push(blogPage)
        libraries.source.handlers.push(detailPage)
        libraries.source.handlers.push(orderPage)
        libraries.source.handlers.push(sliderPage)
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
}

export default lbTheme