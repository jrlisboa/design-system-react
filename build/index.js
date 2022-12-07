var $k4wjR$reactjsxruntime = require("react/jsx-runtime");
var $k4wjR$react = require("react");
var $k4wjR$proptypes = require("prop-types");
var $k4wjR$reactdom = require("react-dom");
var $k4wjR$styledcomponents = require("styled-components");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Dialog", () => $f6d29509aa7d4ddc$export$2e2bcd8739ae039);
$parcel$export(module.exports, "GlobalStyle", () => $7ee65eb41152645a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Theme", () => $d3312e4658a1f313$export$2e2bcd8739ae039);




function $5a2b81401167867c$export$c28eb56412dc9457(id, type = "div") {
    if (!id) throw new Error("Invalid ID");
    const element = document.createElement(type);
    element.setAttribute("id", id);
    document.body.appendChild(element);
    return element;
}


var $8964f9cf427effe8$exports = {};
$8964f9cf427effe8$exports = new URL("close_icon.fe9ffc96.svg", "file:" + __filename).toString();



const $e929c7e8e76ef83d$var$breakpoint = "600px";
const $e929c7e8e76ef83d$export$7d65ec21a1b1e766 = (0, ($parcel$interopDefault($k4wjR$styledcomponents))).div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: ${(props)=>props.theme.colorBackPageOverlap};
    display: flex;

    @media (min-width: ${$e929c7e8e76ef83d$var$breakpoint}) {
        justify-content: center;
    }
`;
const $e929c7e8e76ef83d$export$c7f9d566c855d135 = (0, ($parcel$interopDefault($k4wjR$styledcomponents))).div`
    width: 100%;
    align-self: flex-end;
    background-color: ${(props)=>props.theme.colorPageBackground};
    padding: 0 ${(props)=>props.theme.spaceMd};

    @media (min-width: ${$e929c7e8e76ef83d$var$breakpoint}) {
        width: 50%;
        align-self: center;
    }
`;
const $e929c7e8e76ef83d$export$96bff41cd210d007 = (0, ($parcel$interopDefault($k4wjR$styledcomponents))).div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top: ${(props)=>props.theme.spaceMd};
    margin-bottom: ${(props)=>props.theme.spaceSm};
`;
const $e929c7e8e76ef83d$export$2a0c3c6e1a176bca = (0, ($parcel$interopDefault($k4wjR$styledcomponents))).h2`
    font-size: ${(props)=>props.theme.fontSizeTitle};
    color: ${(props)=>props.theme.colorPageTitle};
    font-family: ${(props)=>props.theme.fontFamilyTitle};
    line-height: ${(props)=>props.theme.lineHeightTitle};
    letter-spacing: ${(props)=>props.theme.spacingTitle};
`;
const $e929c7e8e76ef83d$export$fbfd361f0cef4479 = (0, ($parcel$interopDefault($k4wjR$styledcomponents))).div`
    height: 100%;
    width: 32px;

    &:hover {
        cursor: pointer;
    }
`;
const $e929c7e8e76ef83d$export$7e6cfa6f3884b5f = (0, ($parcel$interopDefault($k4wjR$styledcomponents))).div`
    max-height: calc(80vh - ${(props)=>props.theme.spaceLg});
    min-height: 20vh;
    padding-bottom: ${(props)=>props.theme.spaceMd};
    overflow-y: auto;
    
    img {
        max-width: 100%;
        object-fit: cover;
    }
`;


const $f6d29509aa7d4ddc$var$dialogRootId = "dialog-root";
function $f6d29509aa7d4ddc$var$Dialog(props) {
    const { isOpen: isOpen , onClose: onClose  } = props;
    let dialogRoot = document.getElementById($f6d29509aa7d4ddc$var$dialogRootId);
    if (!dialogRoot) dialogRoot = (0, $5a2b81401167867c$export$c28eb56412dc9457)($f6d29509aa7d4ddc$var$dialogRootId);
    (0, $k4wjR$react.useEffect)(()=>{
        const handleKey = (event)=>{
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
            }
        };
        document.addEventListener("keydown", handleKey);
        return ()=>{
            document.removeEventListener("keydown", handleKey);
            onClose();
        };
    }, []);
    (0, $k4wjR$react.useEffect)(()=>{
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return ()=>document.body.style.overflow = "unset";
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, $k4wjR$reactdom.createPortal)(/*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsx)($f6d29509aa7d4ddc$var$DialogContent, {
        ...props
    }), dialogRoot);
}
function $f6d29509aa7d4ddc$var$DialogContent({ title: title , closeOnOverlayClick: closeOnOverlayClick , children: children , onClose: onClose  }) {
    return /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsx)((0, $e929c7e8e76ef83d$export$7d65ec21a1b1e766), {
        "data-testid": "DialogWrapper",
        onClick: closeOnOverlayClick ? onClose : undefined,
        children: /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsxs)((0, $e929c7e8e76ef83d$export$c7f9d566c855d135), {
            "data-testid": "Dialog",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsxs)((0, $e929c7e8e76ef83d$export$96bff41cd210d007), {
                    "data-testid": "DialogHeader",
                    children: [
                        /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsx)((0, $e929c7e8e76ef83d$export$2a0c3c6e1a176bca), {
                            "data-testid": "DialogTitle",
                            children: title
                        }),
                        /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsx)((0, $e929c7e8e76ef83d$export$fbfd361f0cef4479), {
                            "data-testid": "DialogCloseButton",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsx)("img", {
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($8964f9cf427effe8$exports))),
                                alt: "Close"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsx)((0, $e929c7e8e76ef83d$export$7e6cfa6f3884b5f), {
                    "data-testid": "DialogContent",
                    children: children
                })
            ]
        })
    });
}
$f6d29509aa7d4ddc$var$Dialog.propTypes = {
    title: (0, ($parcel$interopDefault($k4wjR$proptypes))).string,
    isOpen: (0, ($parcel$interopDefault($k4wjR$proptypes))).bool.isRequired,
    onClose: (0, ($parcel$interopDefault($k4wjR$proptypes))).func.isRequired,
    closeOnOverlayClick: (0, ($parcel$interopDefault($k4wjR$proptypes))).bool.isRequired,
    children: (0, ($parcel$interopDefault($k4wjR$proptypes))).oneOfType([
        (0, ($parcel$interopDefault($k4wjR$proptypes))).arrayOf((0, ($parcel$interopDefault($k4wjR$proptypes))).element),
        (0, ($parcel$interopDefault($k4wjR$proptypes))).element,
        (0, ($parcel$interopDefault($k4wjR$proptypes))).object
    ])
};
$f6d29509aa7d4ddc$var$Dialog.defaultProps = {
    title: "",
    children: /*#__PURE__*/ (0, $k4wjR$reactjsxruntime.jsx)("div", {})
};
var $f6d29509aa7d4ddc$export$2e2bcd8739ae039 = $f6d29509aa7d4ddc$var$Dialog;


var $d3312e4658a1f313$export$2e2bcd8739ae039 = {
    borderRadius: "0px",
    colorPageTitle: "rgba(0, 0, 0, 1)",
    colorPageBody: "rgba(0, 0, 0, 1)",
    colorPageBackground: "rgba(255, 255, 255, 1)",
    colorBackPageOverlap: "rgba(0, 0, 0, 0.8)",
    fontFamilyTitle: "Inter",
    fontFamilyBody: "Inter",
    fontWeightBold: 500,
    fontWeightNormal: 400,
    fontSizeTitle: "22px",
    lineHeightTitle: "30px",
    spacingTitle: "-0.032em",
    fontSizeBody: "18px",
    lineHeightBody: "24px",
    spacingBody: "-0.028em",
    spaceSm: "26px",
    spaceMd: "32px",
    spaceLg: "42px"
};



const $7ee65eb41152645a$var$GlobalStyle = (0, $k4wjR$styledcomponents.createGlobalStyle)`
    html, body, div, h1, h2, h3 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    body {
        background: ${(props)=>props.theme.colorPageBackground};
        font-size: ${(props)=>props.theme.fontSizeBody};
        color: ${(props)=>props.theme.colorPageBody};
        font-family: ${(props)=>props.theme.fontFamilyBody};
        line-height: ${(props)=>props.theme.lineHeightBody};
        letter-spacing: ${(props)=>props.theme.spacingBody};
    }
`;
var $7ee65eb41152645a$export$2e2bcd8739ae039 = $7ee65eb41152645a$var$GlobalStyle;




//# sourceMappingURL=index.js.map
