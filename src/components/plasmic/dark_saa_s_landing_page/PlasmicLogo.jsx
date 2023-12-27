// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qeJKyv24ewJk52PwTQnhz5
// Component: FxuNOnUz13vL
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: qeJKyv24ewJk52PwTQnhz5/projectcss
import sty from "./PlasmicLogo.module.css"; // plasmic-import: FxuNOnUz13vL/css
import logopngQElR72NrFko from "./images/logopng.png"; // plasmic-import: QElR-72NrFKO/picture
import lineBranchpngZVlKmMUyLR from "./images/lineBranchpng.png"; // plasmic-import: ZVl_kmMUyL_R/picture

createPlasmicElementProxy;

export const PlasmicLogo__VariantProps = new Array("_50Opaque", "smallLogo");

export const PlasmicLogo__ArgProps = new Array();

const $$ = {};

function PlasmicLogo__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "_50Opaque",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props._50Opaque
      },
      {
        path: "smallLogo",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.smallLogo
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.root_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque") }
      )}
      href={`/frtlatam.com`}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.img_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque"),
          [sty.imgsmallLogo]: hasVariant($state, "smallLogo", "smallLogo")
        })}
        displayHeight={"100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={
          hasVariant($state, "smallLogo", "smallLogo") ? "50px" : "none"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        src={
          hasVariant($state, "smallLogo", "smallLogo")
            ? {
                src: lineBranchpngZVlKmMUyLR,
                fullWidth: 100,
                fullHeight: 100,
                aspectRatio: undefined
              }
            : {
                src: logopngQElR72NrFko,
                fullWidth: 224,
                fullHeight: 50,
                aspectRatio: undefined
              }
        }
      />
    </a>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogo__ArgProps,
          internalVariantPropNames: PlasmicLogo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogo";
  } else {
    func.displayName = `PlasmicLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicLogo = Object.assign(
  // Top-level PlasmicLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicLogo
    internalVariantProps: PlasmicLogo__VariantProps,
    internalArgProps: PlasmicLogo__ArgProps
  }
);

export default PlasmicLogo;
/* prettier-ignore-end */
