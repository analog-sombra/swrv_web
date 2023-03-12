import "/build/_shared/chunk-4XW2F6EJ.js";
import {
  bloginfo_default
} from "/build/_shared/chunk-AWVOM5UL.js";
import "/build/_shared/chunk-PF7MB3XX.js";
import {
  Footer
} from "/build/_shared/chunk-7VOK26A4.js";
import "/build/_shared/chunk-25HLZJFV.js";
import {
  IntroNavBar
} from "/build/_shared/chunk-RXYACUU2.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/blogs/bloginfo.$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var blogs = () => {
  let data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(bloginfo_default, { error: data.error, image: data.nebdata.imageUrl, title: data.nebdata.title, shorttitle: data.nebdata.titleDesc, description: data.nebdata.description, date: data.nebdata.dateTime, type: data.nebdata.type }, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blogs/bloginfo.$id.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
};
var bloginfo_id_default = blogs;
export {
  bloginfo_id_default as default
};
//# sourceMappingURL=/build/routes/blogs/bloginfo.$id-T5OONTD7.js.map
