declare module '*.module.css' {
    interface Styles {
        [className: string]: string;
    }
    const styles: Styles;
    export = styles;
}

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}