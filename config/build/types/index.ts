export interface BuildOptions {
    mode: BuildMode;
    port: number;
    paths: BuildPaths;
    analyzer: boolean;
}

export interface BuildPaths {
    html: string;
    icon: string;
    entry: string;
    output: string;
    src: string;
}

export type BuildMode = 'production' | 'development';