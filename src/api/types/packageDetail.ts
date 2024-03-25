export interface PackageDetail {
    name: string;
    description: string;
    readme: string;
    homepage: string;
    maintainers: {
        name: string;
        email: string;
    }[];
    license: string;
}