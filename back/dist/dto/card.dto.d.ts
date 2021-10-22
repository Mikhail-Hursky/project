export interface CardDto {
    id: string;
    spells: ISpell[];
    name: string;
    title: string;
    image: IImage;
    passive: IPassive;
}
export interface IPassive {
    name: string;
    description: string;
    image: IImage;
}
export interface IImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}
export default interface ISpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
        label: string[];
        effect: string[];
    };
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: any;
    effect: any;
    effectBurn: (string | null)[];
    vars: any[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: IImage;
    resource: string;
}
