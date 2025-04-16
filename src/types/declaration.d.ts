declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.m4a";

declare namespace JSX {
  export import IntrinsicElements = React.JSX.IntrinsicElements
  export import Element = React.JSX.Element
}