import IChampion from "../dto/IChampion";
import {IChampionFull} from "../dto/IChampuionFull";

export const Champions: IChampion[] = [
  {
    id: "Annie",
    spells: [
      {
        id: "AnnieQ",
        name: "Disintegrate",
        description: "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
        tooltip: "Annie hurls a fireball, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. If the target dies, Annie refunds the Mana cost and reduces the Cooldown by 50%.",
        leveltip: {
          label: ["Damage", "@AbilityResourceName@ Cost"],
          effect: ["{{ basedamage }} -> {{ basedamageNL }}", "{{ cost }} -> {{ costNL }}"]
        },
        maxrank: 5,
        cooldown: [4, 4, 4, 4, 4],
        cooldownBurn: "4",
        cost: [60, 65, 70, 75, 80],
        costBurn: "60/65/70/75/80",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [625, 625, 625, 625, 625],
        rangeBurn: "625",
        image: {
          full: "AnnieQ.png",
          sprite: "spell1.png",
          group: "spell",
          x: 144,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }, {
        id: "AnnieW",
        name: "Incinerate",
        description: "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
        tooltip: "Annie projects a wave of fire, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.",
        leveltip: {
          label: ["Damage", "@AbilityResourceName@ Cost"],
          effect: ["{{ basedamage }} -> {{ basedamageNL }}", "{{ cost }} -> {{ costNL }}"]
        },
        maxrank: 5,
        cooldown: [8, 8, 8, 8, 8],
        cooldownBurn: "8",
        cost: [90, 95, 100, 105, 110],
        costBurn: "90/95/100/105/110",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [600, 600, 600, 600, 600],
        rangeBurn: "600",
        image: {
          full: "AnnieW.png",
          sprite: "spell1.png",
          group: "spell",
          x: 192,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }, {
        id: "AnnieE",
        name: "Molten Shield",
        description: "Grants Annie or an ally a shield, a burst of Movement Speed, and damages enemies who attack her with basic attacks.",
        tooltip: "Annie grants herself or an ally <shield>{{ shieldblocktotal }} Shield</shield> for {{ shieldduration }} seconds and <speed>{{ movespeedcalc }} Move Speed</speed> decaying over {{ movementspeedduration }} seconds. While the shield holds, enemies who Attack it take <magicDamage>{{ damagereturn }} magic damage</magicDamage>.",
        leveltip: {
          label: ["Shield Health", "Cooldown", "Damage Reflection"],
          effect: ["{{ shieldamount }} -> {{ shieldamountNL }}", "{{ cooldown }} -> {{ cooldownNL }}", "{{ damagereflection }} -> {{ damagereflectionNL }}"]
        },
        maxrank: 5,
        cooldown: [14, 13, 12, 11, 10],
        cooldownBurn: "14/13/12/11/10",
        cost: [40, 40, 40, 40, 40],
        costBurn: "40",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [800, 800, 800, 800, 800],
        rangeBurn: "800",
        image: {
          full: "AnnieE.png",
          sprite: "spell1.png",
          group: "spell",
          x: 240,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }, {
        id: "AnnieR",
        name: "Summon: Tibbers",
        description: "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
        tooltip: "Annie summons her bear Tibbers, dealing <magicDamage>{{ initialburstdamage }} magic damage</magicDamage>. For the next {{ tibberslifetime }} seconds, Tibbers burns nearby enemies for <magicDamage>{{ tibbersauradamage }} magic damage per second</magicDamage> and his Attacks deal <magicDamage>{{ tibbersaadamage }} magic damage</magicDamage>. Annie can <recast>Recast</recast> this ability to direct Tibbers.<br /><br />If Annie dies, Tibbers becomes enraged, gaining <attackSpeed>275% Attack Speed</attackSpeed> and <speed>100% Movement Speed</speed> decaying over 3 seconds.",
        leveltip: {
          label: ["Cooldown", "Initial Damage", "Aura Damage", "Tibbers Attack Damage", "Bonus Resistances", "Bonus Health"],
          effect: ["{{ cooldown }} -> {{ cooldownNL }}", "{{ initialdamage }} -> {{ initialdamageNL }}", "{{ auradamage }} -> {{ auradamageNL }}", "{{ tibbersattackdamage }} -> {{ tibbersattackdamageNL }}", "{{ bonusresistances }} -> {{ bonusresistancesNL }}", "{{ bonushealth }} -> {{ bonushealthNL }}"]
        },
        maxrank: 3,
        cooldown: [120, 100, 80],
        cooldownBurn: "120/100/80",
        cost: [100, 100, 100],
        costBurn: "100",
        datavalues: {},
        effect: [null, [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [600, 600, 600],
        rangeBurn: "600",
        image: {
          full: "AnnieR.png",
          sprite: "spell1.png",
          group: "spell",
          x: 288,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }],
    name: "Annie",
    title: "the Dark Child",
    image: {
      full: "Annie.png",
      sprite: "champion0.png",
      group: "champion",
      x: 336,
      y: 0,
      w: 48,
      h: 48
    },
    passive: {
      name: "Pyromania",
      description: "After casting 4 spells, Annie's next offensive spell will stun the target.",
      image: {
        full: "Annie_Passive.png",
        sprite: "passive0.png",
        group: "passive",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      }
    }
  },
  {
    id: "Anivia",
    spells: [{
      id: "FlashFrost",
      name: "Flash Frost",
      description: "Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.",
      tooltip: "Anivia fires a massive chunk of ice, dealing <magicDamage>{{ totalpassthroughdamage }} magic damage</magicDamage> and <keywordMajor>Chilling</keywordMajor> enemies for {{ slowduration }} seconds, <status>Slowing</status> them by {{ spell.glacialstorm:slowamount }}%. At the end of its range, the ice detonates, <status>Stunning</status> enemies for {{ stunduration }} seconds and dealing <magicDamage>{{ totalexplosiondamage }} magic damage</magicDamage>.<br /><br />Anivia can <recast>Recast</recast> this ability while the ice flies to detonate it early.",
      leveltip: {
        label: ["Damage", "Detonation Damage", "Stun Duration", "Cooldown", "@AbilityResourceName@ Cost"],
        effect: ["{{ passthroughbasedamage }} -> {{ passthroughbasedamageNL }}", "{{ explosionbasedamage }} -> {{ explosionbasedamageNL }}", "{{ stunduration }} -> {{ stundurationNL }}", "{{ cooldown }} -> {{ cooldownNL }}", "{{ cost }} -> {{ costNL }}"]
      },
      maxrank: 5,
      cooldown: [11, 10, 9, 8, 7],
      cooldownBurn: "11/10/9/8/7",
      cost: [80, 85, 90, 95, 100],
      costBurn: "80/85/90/95/100",
      datavalues: {},
      effect: [null, [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [1075, 1075, 1075, 1075, 1075],
      rangeBurn: "1075",
      image: {
        full: "FlashFrost.png",
        sprite: "spell0.png",
        group: "spell",
        x: 432,
        y: 144,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "Crystallize",
      name: "Crystallize",
      description: "Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.",
      tooltip: "Anivia summons a wall of ice {{ e2 }} units wide. The wall lasts for {{ e1 }} seconds before it melts.",
      leveltip: {
        label: ["Width"],
        effect: ["{{ e2 }} -> {{ e2NL }}"]
      },
      maxrank: 5,
      cooldown: [17, 17, 17, 17, 17],
      cooldownBurn: "17",
      cost: [70, 70, 70, 70, 70],
      costBurn: "70",
      datavalues: {},
      effect: [null, [5, 5, 5, 5, 5],
        [400, 500, 600, 700, 800],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "5", "400/500/600/700/800", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [1000, 1000, 1000, 1000, 1000],
      rangeBurn: "1000",
      image: {
        full: "Crystallize.png",
        sprite: "spell1.png",
        group: "spell",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "Frostbite",
      name: "Frostbite",
      description: "With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.",
      tooltip: "Anivia blasts an enemy with a freezing wind, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. Against <keywordMajor>Chilled</keywordMajor> enemies, Anivia deals <magicDamage>{{ empowereddamage }} magic damage</magicDamage> instead.",
      leveltip: {
        label: ["Damage"],
        effect: ["{{ basedamage }} -> {{ basedamageNL }}"]
      },
      maxrank: 5,
      cooldown: [4, 4, 4, 4, 4],
      cooldownBurn: "4",
      cost: [50, 50, 50, 50, 50],
      costBurn: "50",
      datavalues: {},
      effect: [null, [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [650, 650, 650, 650, 650],
      rangeBurn: "650",
      image: {
        full: "Frostbite.png",
        sprite: "spell1.png",
        group: "spell",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "GlacialStorm",
      name: "Glacial Storm",
      description: "Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.",
      tooltip: "<toggle>Toggle:</toggle> Anivia calls forth a driving rain of ice and hail that <status>Slows</status> enemies by {{ slowamount }}% and deals <magicDamage>{{ totaldamagepersecond }} magic damage per second</magicDamage>. The storm increases in size over {{ growthtime }} seconds.<br /><br />When the storm is fully formed, it <keywordMajor>Chills</keywordMajor>, <status>Slows</status> by {{ slowpercentempoweredtt }}%, and does <magicDamage>{{ empowereddamagepersecondtooltiponly }} magic damage per second</magicDamage> instead.",
      leveltip: {
        label: ["Damage Per Second", "Slow", "Chilled Slow Amount", "Mana Cost Per Second", "Cooldown"],
        effect: ["{{ damagepersecond }} -> {{ damagepersecondNL }}", "{{ slowamount }}% -> {{ slowamountNL }}%", "{{ slowpercentempoweredtt }}% -> {{ slowpercentempoweredttNL }}%", "{{ manacostpersecond }} -> {{ manacostpersecondNL }}", "{{ cooldown }} -> {{ cooldownNL }}"]
      },
      maxrank: 3,
      cooldown: [4, 3, 2],
      cooldownBurn: "4/3/2",
      cost: [60, 60, 60],
      costBurn: "60",
      datavalues: {},
      effect: [null, [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " + {{ manacostpersecond }} Mana per second",
      maxammo: "-1",
      range: [750, 750, 750],
      rangeBurn: "750",
      image: {
        full: "GlacialStorm.png",
        sprite: "spell1.png",
        group: "spell",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} + {{ manacostpersecond }} Mana per second"
    }],
    name: "Anivia",
    title: "the Cryophoenix",
    image: {
      full: "Anivia.png",
      sprite: "champion0.png",
      group: "champion",
      x: 288,
      y: 0,
      w: 48,
      h: 48
    },
    passive: {
      name: "Rebirth",
      description: "Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.",
      image: {
        full: "Anivia_P.png",
        sprite: "passive0.png",
        group: "passive",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      }
    }
  },
  {
    id: "Camille",
    spells: [{
      id: "CamilleQ",
      name: "Precision Protocol",
      description: "Camille's next attack deals bonus damage and grants bonus movement speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
      tooltip: "Camille's next Attack deals an additional <physicalDamage>{{ bonusdamage }} physical damage</physicalDamage> and grants her <speed>{{ msbonus*100 }}% Move Speed</speed> for {{ msduration }} second. This ability can be <recast>Recast</recast> in the next {{ qtotalrecasttime }} seconds.<br /><br />If the <recast>Recast</recast> Attack hits at least {{ qrampuptime }} seconds after the first, the bonus damage is increased to <physicalDamage>{{ empoweredbonusdamage }}</physicalDamage> and {{ damageconversionpercentage }} of the Attack's damage is converted into <trueDamage>true damage</trueDamage>.",
      leveltip: {
        label: ["Total AD Ratio", "Cooldown", "Move Speed"],
        effect: ["{{ tadratio*100.000000 }}% -> {{ tadrationl*100.000000 }}%", "{{ cooldown }} -> {{ cooldownNL }}", "{{ msbonus*100.000000 }}% -> {{ msbonusnl*100.000000 }}%"]
      },
      maxrank: 5,
      cooldown: [9, 8.25, 7.5, 6.75, 6],
      cooldownBurn: "9/8.25/7.5/6.75/6",
      cost: [25, 25, 25, 25, 25],
      costBurn: "25",
      datavalues: {},
      effect: [null, [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [325, 325, 325, 325, 325],
      rangeBurn: "325",
      image: {
        full: "CamilleQ.png",
        sprite: "spell2.png",
        group: "spell",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "CamilleW",
      name: "Tactical Sweep",
      description: "Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.",
      tooltip: "Camille winds up and slices, dealing <physicalDamage>{{ basedamagetotal }} physical damage</physicalDamage>.<br /><br />Enemies hit by the outer half are <status>Slowed</status> by {{ slowpercentage }}% decaying over {{ slowduration }} seconds, and they take an additional <physicalDamage>{{ outeredgetooltip }} max Health physical damage</physicalDamage>. Camille restores <healing>{{ outerconehealingratio }}% of the bonus damage dealt to champions as Health</healing>.",
      leveltip: {
        label: ["@AbilityResourceName@ Cost", "Damage", "Maximum Health Damage", "Cooldown"],
        effect: ["{{ cost }} -> {{ costNL }}", "{{ basedamage }} -> {{ basedamageNL }}", "{{ outerconemaxhpdamage*100.000000 }}% -> {{ outerconemaxhpdamagenl*100.000000 }}%", "{{ cooldown }} -> {{ cooldownNL }}"]
      },
      maxrank: 5,
      cooldown: [17, 15.5, 14, 12.5, 11],
      cooldownBurn: "17/15.5/14/12.5/11",
      cost: [50, 55, 60, 65, 70],
      costBurn: "50/55/60/65/70",
      datavalues: {},
      effect: [null, [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [610, 610, 610, 610, 610],
      rangeBurn: "610",
      image: {
        full: "CamilleW.png",
        sprite: "spell2.png",
        group: "spell",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "CamilleE",
      name: "Hookshot",
      description: "Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.",
      tooltip: "Camille fires a hookshot that attaches to terrain, pulling her to it for 1 second and allowing this Ability to be <recast>Recast</recast>.<br /><br /><recast>Recast:</recast> Camille dashes from the wall, colliding with the first enemy champion hit. Upon landing, she deals <physicalDamage>{{ totaldamage }} physical damage</physicalDamage> to nearby enemies and <status>Stuns</status> enemy champions for {{ knockupduration }} seconds. Dashes towards enemy champions travel twice as far and grant <attackSpeed>{{ asbuff*100 }}% Attack Speed</attackSpeed> for {{ asduration }} seconds on impact.",
      leveltip: {
        label: ["Cooldown", "Damage", "Attack Speed"],
        effect: ["{{ cooldown }} -> {{ cooldownNL }}", "{{ basedamage }} -> {{ basedamageNL }}", "{{ asbuff*100.000000 }}% -> {{ asbuffnl*100.000000 }}%"]
      },
      maxrank: 5,
      cooldown: [16, 14.5, 13, 11.5, 10],
      cooldownBurn: "16/14.5/13/11.5/10",
      cost: [70, 70, 70, 70, 70],
      costBurn: "70",
      datavalues: {},
      effect: [null, [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [800, 800, 800, 800, 800],
      rangeBurn: "800",
      image: {
        full: "CamilleE.png",
        sprite: "spell2.png",
        group: "spell",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "CamilleR",
      name: "The Hextech Ultimatum",
      description: "Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.",
      tooltip: "Camille briefly becomes Untargetable and leaps onto an enemy champion, interrupting channels and locking them into an area they cannot escape by any means for {{ rduration }} seconds. Other nearby enemies are <status>Knocked Away</status>. Her Attacks against the trapped enemy deal an additional <magicDamage>{{ ronhitdamage }} plus {{ rpercentcurrenthpdamage }}% current Health magic damage</magicDamage>.",
      leveltip: {
        label: ["Duration", "Cooldown", "Bonus Damage", "Current Health Damage"],
        effect: ["{{ rduration }} -> {{ rdurationNL }}", "{{ cooldown }} -> {{ cooldownNL }}", "{{ ronhitdamage }} -> {{ ronhitdamageNL }}", "{{ rpercentcurrenthpdamage }}% -> {{ rpercentcurrenthpdamageNL }}%"]
      },
      maxrank: 3,
      cooldown: [140, 115, 90],
      cooldownBurn: "140/115/90",
      cost: [100, 100, 100],
      costBurn: "100",
      datavalues: {},
      effect: [null, [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [475, 475, 475],
      rangeBurn: "475",
      image: {
        full: "CamilleR.png",
        sprite: "spell2.png",
        group: "spell",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }],
    name: "Camille",
    title: "the Steel Shadow",
    image: {
      full: "Camille.png",
      sprite: "champion0.png",
      group: "champion",
      x: 336,
      y: 48,
      w: 48,
      h: 48
    },
    passive: {
      name: "Adaptive Defenses",
      description: "Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.",
      image: {
        full: "Camille_Passive.png",
        sprite: "passive0.png",
        group: "passive",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      }
    }
  },
  {
    id: "Cassiopeia",
    spells: [{
      id: "CassiopeiaQ",
      name: "Noxious Blast",
      description: "Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.",
      tooltip: "Cassiopeia blasts noxious gas, <keywordMajor>Poisoning</keywordMajor> enemies and dealing <magicDamage>{{ tooltiptotaldamage }} magic damage</magicDamage> over {{ e2 }} seconds. Hitting a champion grants Cassiopeia <speed>{{ e3 }}% Move Speed</speed> decaying over {{ e4 }} seconds.",
      leveltip: {
        label: ["Damage", "Move Speed", "@AbilityResourceName@ Cost"],
        effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e3 }}% -> {{ e3NL }}%", "{{ cost }} -> {{ costNL }}"]
      },
      maxrank: 5,
      cooldown: [3.5, 3.5, 3.5, 3.5, 3.5],
      cooldownBurn: "3.5",
      cost: [50, 60, 70, 80, 90],
      costBurn: "50/60/70/80/90",
      datavalues: {},
      effect: [null, [75, 110, 145, 180, 215],
        [3, 3, 3, 3, 3],
        [30, 35, 40, 45, 50],
        [3, 3, 3, 3, 3],
        [7, 7, 7, 7, 7],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "75/110/145/180/215", "3", "30/35/40/45/50", "3", "7", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [850, 850, 850, 850, 850],
      rangeBurn: "850",
      image: {
        full: "CassiopeiaQ.png",
        sprite: "spell2.png",
        group: "spell",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "CassiopeiaW",
      name: "Miasma",
      description: "Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.",
      tooltip: "Cassiopeia spews venom, leaving toxic clouds for {{ e4 }} seconds. Enemies in the clouds take <magicDamage>{{ damagepersecond }} magic damage</magicDamage> per second, are <keywordMajor>Poisoned</keywordMajor>, <status>Grounded</status>, and <status>Slowed</status> by {{ e2 }}%.",
      leveltip: {
        label: ["Damage", "Slow", "Cooldown", "@AbilityResourceName@ Cost"],
        effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e2 }}% -> {{ e2NL }}%", "{{ cooldown }} -> {{ cooldownNL }}", "{{ cost }} -> {{ costNL }}"]
      },
      maxrank: 5,
      cooldown: [24, 22, 20, 18, 16],
      cooldownBurn: "24/22/20/18/16",
      cost: [70, 80, 90, 100, 110],
      costBurn: "70/80/90/100/110",
      datavalues: {},
      effect: [null, [20, 25, 30, 35, 40],
        [40, 50, 60, 70, 80],
        [1, 1, 1, 1, 1],
        [5, 5, 5, 5, 5],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "20/25/30/35/40", "40/50/60/70/80", "1", "5", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [700, 700, 700, 700, 700],
      rangeBurn: "700",
      image: {
        full: "CassiopeiaW.png",
        sprite: "spell2.png",
        group: "spell",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "CassiopeiaE",
      name: "Twin Fang",
      description: "Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.",
      tooltip: "Cassiopeia launches deadly fangs, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. If the enemy is <keywordMajor>Poisoned</keywordMajor>, they take an additional <magicDamage>{{ bouspoisoneddamage }} magic damage</magicDamage> and Cassiopeia restores <healing>{{ healcalc }} Health</healing>.<br /><br />If this kills the target, Cassiopeia restores <scaleMana>{{ cost }} Mana</scaleMana>.<br /><br />",
      leveltip: {
        label: ["Bonus Poison Damage", "Healing from Ability Power", "@AbilityResourceName@ Cost"],
        effect: ["{{ e1 }} -> {{ e1NL }}", "{{ healratio*100.000000 }}% -> {{ healrationl*100.000000 }}%", "{{ cost }} -> {{ costNL }}"]
      },
      maxrank: 5,
      cooldown: [0.75, 0.75, 0.75, 0.75, 0.75],
      cooldownBurn: "0.75",
      cost: [50, 48, 46, 44, 42],
      costBurn: "50/48/46/44/42",
      datavalues: {},
      effect: [null, [20, 40, 60, 80, 100],
        [0, 0, 0, 0, 0],
        [0.1, 0.1, 0.1, 0.1, 0.1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      effectBurn: [null, "20/40/60/80/100", "0", "0.1", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [700, 700, 700, 700, 700],
      rangeBurn: "700",
      image: {
        full: "CassiopeiaE.png",
        sprite: "spell2.png",
        group: "spell",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }, {
      id: "CassiopeiaR",
      name: "Petrifying Gaze",
      description: "Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.",
      tooltip: "Cassiopeia unleashes a petrifying gaze, dealing <magicDamage>{{ rdamage }} magic damage</magicDamage> and <status>Stunning</status> enemies facing her for {{ rccduration }} seconds. Enemies facing away are <status>Slowed</status> by {{ rslowpercent }}% decaying over the same duration instead.",
      leveltip: {
        label: ["Damage", "Cooldown"],
        effect: ["{{ rbasedamage }} -> {{ rbasedamageNL }}", "{{ cooldown }} -> {{ cooldownNL }}"]
      },
      maxrank: 3,
      cooldown: [120, 100, 80],
      cooldownBurn: "120/100/80",
      cost: [100, 100, 100],
      costBurn: "100",
      datavalues: {},
      effect: [null, [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      vars: [],
      costType: " {{ abilityresourcename }}",
      maxammo: "-1",
      range: [825, 825, 825],
      rangeBurn: "825",
      image: {
        full: "CassiopeiaR.png",
        sprite: "spell2.png",
        group: "spell",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      resource: "{{ cost }} {{ abilityresourcename }}"
    }],
    name: "Cassiopeia",
    title: "the Serpent's Embrace",
    image: {
      full: "Cassiopeia.png",
      sprite: "champion0.png",
      group: "champion",
      x: 384,
      y: 48,
      w: 48,
      h: 48
    },
    passive: {
      name: "Serpentine Grace",
      description: "Cassiopeia gains Move Speed per level, but she cannot purchase Boots items.",
      image: {
        full: "Cassiopeia_Passive.png",
        sprite: "passive0.png",
        group: "passive",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      }
    }
  }
];

export const ChampionsFull: IChampionFull[] = [
  {
    id: "Aatrox",
    name: "Aatrox",
    title: "the Darkin Blade",
    skins: [{
      id: "266000",
      num: 0,
      name: "default",
      chromas: false
    }, {
      id: "266001",
      num: 1,
      name: "Justicar Aatrox",
      chromas: false
    }, {
      id: "266002",
      num: 2,
      name: "Mecha Aatrox",
      chromas: true
    }, {
      id: "266003",
      num: 3,
      name: "Sea Hunter Aatrox",
      chromas: false
    }, {
      id: "266007",
      num: 7,
      name: "Blood Moon Aatrox",
      chromas: false
    }, {
      id: "266008",
      num: 8,
      name: "Blood Moon Aatrox Prestige Edition",
      chromas: false
    }, {
      id: "266009",
      num: 9,
      name: "Victorious Aatrox",
      chromas: true
    }, {
      id: "266011",
      num: 11,
      name: "Odyssey Aatrox",
      chromas: true
    }],
    lore: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
    spells: [
      {
        id: "AatroxQ",
        name: "The Darkin Blade",
        description: "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
        tooltip: "Aatrox slams his greatsword, dealing <physicalDamage>{{ qdamage }} physical damage</physicalDamage>. If they are hit on the edge, they are briefly <status>Knocked Up</status> and they take <physicalDamage>{{ qedgedamage }}</physicalDamage> instead. This Ability can be <recast>Recast</recast> twice, each one changing shape and dealing 25% more damage than the previous one.",
        leveltip: {
          label: ["Cooldown", "Damage", "Total AD Ratio"],
          effect: ["{{ cooldown }} -> {{ cooldownNL }}", "{{ qbasedamage }} -> {{ qbasedamageNL }}", "{{ qtotaladratio*100.000000 }}% -> {{ qtotaladrationl*100.000000 }}%"]
        },
        maxrank: 5,
        cooldown: [14, 12, 10, 8, 6],
        cooldownBurn: "14/12/10/8/6",
        cost: [0, 0, 0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "No Cost",
        maxammo: "-1",
        range: [25000, 25000, 25000, 25000, 25000],
        rangeBurn: "25000",
        image: {
          full: "AatroxQ.png",
          sprite: "spell0.png",
          group: "spell",
          x: 240,
          y: 48,
          w: 48,
          h: 48
        },
        resource: "No Cost"
      }, {
        id: "AatroxW",
        name: "Infernal Chains",
        description: "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
        tooltip: "Aatrox fires a chain, <status>Slowing</status> the first enemy hit by {{ wslowpercentage*-100 }}% for {{ wslowduration }} seconds and dealing <physicalDamage>{{ wdamage }} physical damage</physicalDamage>. Champions and large jungle monsters have {{ wslowduration }} seconds to leave the impact area or be <status>Pulled</status> back to the center and damaged again for the same amount.",
        leveltip: {
          label: ["Cooldown", "Damage"],
          effect: ["{{ cooldown }} -> {{ cooldownNL }}", "{{ wbasedamage }} -> {{ wbasedamageNL }}"]
        },
        maxrank: 5,
        cooldown: [20, 18.5, 17, 15.5, 14],
        cooldownBurn: "20/18.5/17/15.5/14",
        cost: [0, 0, 0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "No Cost",
        maxammo: "-1",
        range: [825, 825, 825, 825, 825],
        rangeBurn: "825",
        image: {
          full: "AatroxW.png",
          sprite: "spell0.png",
          group: "spell",
          x: 288,
          y: 48,
          w: 48,
          h: 48
        },
        resource: "No Cost"
      }, {
        id: "AatroxE",
        name: "Umbral Dash",
        description: "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
        tooltip: "<spellPassive>Passive:</spellPassive> Aatrox gains <lifeSteal>{{ espellvamp }}% Omnivamp</lifeSteal> against champions, increased to <lifeSteal>{{ espellvampempowered }}% Omnivamp</lifeSteal> during <keywordMajor>World Ender</keywordMajor>.<br /><br /><spellActive>Active:</spellActive> Aatrox dashes. He can use this Ability while winding up his other Abilities.",
        leveltip: {
          label: ["Cooldown", "Healing %", "Healing % during World Ender"],
          effect: ["{{ cooldown }} -> {{ cooldownNL }}", "{{ espellvamp }}% -> {{ espellvampNL }}%", "{{ espellvampempowered }}% -> {{ espellvampempoweredNL }}%"]
        },
        maxrank: 5,
        cooldown: [9, 8, 7, 6, 5],
        cooldownBurn: "9/8/7/6/5",
        cost: [0, 0, 0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "No Cost",
        maxammo: "1",
        range: [25000, 25000, 25000, 25000, 25000],
        rangeBurn: "25000",
        image: {
          full: "AatroxE.png",
          sprite: "spell0.png",
          group: "spell",
          x: 336,
          y: 48,
          w: 48,
          h: 48
        },
        resource: "No Cost"
      }, {
        id: "AatroxR",
        name: "World Ender",
        description: "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and movement speed. If he gets a takedown, this effect is extended.",
        tooltip: "Aatrox reveals his true demonic form, <status>Fearing</status> nearby minions for {{ rminionfearduration }} seconds and gaining <speed>{{ rmovementspeedbonus*100 }}% Move Speed</speed> decaying over {{ rduration }} seconds. He also gains <scaleAD>{{ rtotaladamp*100 }}% Attack Damage</scaleAD> and increases <healing>self-healing by {{ rhealingamp*100 }}%</healing> for the duration.<br /><br />Champion takedowns extend the duration of this effect by {{ rextension }} seconds and refresh the <speed>Move Speed</speed> effect.",
        leveltip: {
          label: ["Total Attack Damage Increase", "Healing Increase", "Move Speed", "Cooldown"],
          effect: ["{{ rtotaladamp*100.000000 }}% -> {{ rtotaladampnl*100.000000 }}%", "{{ rhealingamp*100.000000 }}% -> {{ rhealingampnl*100.000000 }}%", "{{ rmovementspeedbonus*100.000000 }}% -> {{ rmovementspeedbonusnl*100.000000 }}%", "{{ cooldown }} -> {{ cooldownNL }}"]
        },
        maxrank: 3,
        cooldown: [120, 100, 80],
        cooldownBurn: "120/100/80",
        cost: [0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [null, [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "No Cost",
        maxammo: "-1",
        range: [25000, 25000, 25000],
        rangeBurn: "25000",
        image: {
          full: "AatroxR.png",
          sprite: "spell0.png",
          group: "spell",
          x: 384,
          y: 48,
          w: 48,
          h: 48
        },
        resource: "No Cost"
      }],
    passive: {
      name: "Deathbringer Stance",
      description: "Periodically, Aatrox's next basic attack deals bonus <physicalDamage>physical damage</physicalDamage> and heals him, based on the target's max health. ",
      image: {
        full: "Aatrox_Passive.png",
        sprite: "passive0.png",
        group: "passive",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      }
    }
  },
  {
    id: "Annie",
    name: "Annie",
    title: "the Dark Child",
    skins: [
      {
        id: "1000",
        num: 0,
        name: "default",
        chromas: false
      }, {
        id: "1001",
        num: 1,
        name: "Goth Annie",
        chromas: false
      }, {
        id: "1002",
        num: 2,
        name: "Red Riding Annie",
        chromas: false
      }, {
        id: "1003",
        num: 3,
        name: "Annie in Wonderland",
        chromas: false
      }, {
        id: "1004",
        num: 4,
        name: "Prom Queen Annie",
        chromas: false
      }, {
        id: "1005",
        num: 5,
        name: "Frostfire Annie",
        chromas: false
      }, {
        id: "1006",
        num: 6,
        name: "Reverse Annie",
        chromas: false
      }, {
        id: "1007",
        num: 7,
        name: "FrankenTibbers Annie",
        chromas: false
      }, {
        id: "1008",
        num: 8,
        name: "Panda Annie",
        chromas: false
      }, {
        id: "1009",
        num: 9,
        name: "Sweetheart Annie",
        chromas: false
      }, {
        id: "1010",
        num: 10,
        name: "Hextech Annie",
        chromas: false
      }, {
        id: "1011",
        num: 11,
        name: "Super Galaxy Annie",
        chromas: false
      }, {
        id: "1012",
        num: 12,
        name: "Annie-Versary",
        chromas: false
      }, {
        id: "1013",
        num: 13,
        name: "Lunar Beast Annie",
        chromas: true
      }],
    lore: "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
    spells: [
      {
        id: "AnnieQ",
        name: "Disintegrate",
        description: "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
        tooltip: "Annie hurls a fireball, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. If the target dies, Annie refunds the Mana cost and reduces the Cooldown by 50%.",
        leveltip: {
          label: ["Damage", "@AbilityResourceName@ Cost"],
          effect: ["{{ basedamage }} -> {{ basedamageNL }}", "{{ cost }} -> {{ costNL }}"]
        },
        maxrank: 5,
        cooldown: [4, 4, 4, 4, 4],
        cooldownBurn: "4",
        cost: [60, 65, 70, 75, 80],
        costBurn: "60/65/70/75/80",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [625, 625, 625, 625, 625],
        rangeBurn: "625",
        image: {
          full: "AnnieQ.png",
          sprite: "spell1.png",
          group: "spell",
          x: 144,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }, {
        id: "AnnieW",
        name: "Incinerate",
        description: "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
        tooltip: "Annie projects a wave of fire, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.",
        leveltip: {
          label: ["Damage", "@AbilityResourceName@ Cost"],
          effect: ["{{ basedamage }} -> {{ basedamageNL }}", "{{ cost }} -> {{ costNL }}"]
        },
        maxrank: 5,
        cooldown: [8, 8, 8, 8, 8],
        cooldownBurn: "8",
        cost: [90, 95, 100, 105, 110],
        costBurn: "90/95/100/105/110",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [600, 600, 600, 600, 600],
        rangeBurn: "600",
        image: {
          full: "AnnieW.png",
          sprite: "spell1.png",
          group: "spell",
          x: 192,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }, {
        id: "AnnieE",
        name: "Molten Shield",
        description: "Grants Annie or an ally a shield, a burst of Movement Speed, and damages enemies who attack her with basic attacks.",
        tooltip: "Annie grants herself or an ally <shield>{{ shieldblocktotal }} Shield</shield> for {{ shieldduration }} seconds and <speed>{{ movespeedcalc }} Move Speed</speed> decaying over {{ movementspeedduration }} seconds. While the shield holds, enemies who Attack it take <magicDamage>{{ damagereturn }} magic damage</magicDamage>.",
        leveltip: {
          label: ["Shield Health", "Cooldown", "Damage Reflection"],
          effect: ["{{ shieldamount }} -> {{ shieldamountNL }}", "{{ cooldown }} -> {{ cooldownNL }}", "{{ damagereflection }} -> {{ damagereflectionNL }}"]
        },
        maxrank: 5,
        cooldown: [14, 13, 12, 11, 10],
        cooldownBurn: "14/13/12/11/10",
        cost: [40, 40, 40, 40, 40],
        costBurn: "40",
        datavalues: {},
        effect: [null, [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [800, 800, 800, 800, 800],
        rangeBurn: "800",
        image: {
          full: "AnnieE.png",
          sprite: "spell1.png",
          group: "spell",
          x: 240,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }, {
        id: "AnnieR",
        name: "Summon: Tibbers",
        description: "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
        tooltip: "Annie summons her bear Tibbers, dealing <magicDamage>{{ initialburstdamage }} magic damage</magicDamage>. For the next {{ tibberslifetime }} seconds, Tibbers burns nearby enemies for <magicDamage>{{ tibbersauradamage }} magic damage per second</magicDamage> and his Attacks deal <magicDamage>{{ tibbersaadamage }} magic damage</magicDamage>. Annie can <recast>Recast</recast> this ability to direct Tibbers.<br /><br />If Annie dies, Tibbers becomes enraged, gaining <attackSpeed>275% Attack Speed</attackSpeed> and <speed>100% Movement Speed</speed> decaying over 3 seconds.",
        leveltip: {
          label: ["Cooldown", "Initial Damage", "Aura Damage", "Tibbers Attack Damage", "Bonus Resistances", "Bonus Health"],
          effect: ["{{ cooldown }} -> {{ cooldownNL }}", "{{ initialdamage }} -> {{ initialdamageNL }}", "{{ auradamage }} -> {{ auradamageNL }}", "{{ tibbersattackdamage }} -> {{ tibbersattackdamageNL }}", "{{ bonusresistances }} -> {{ bonusresistancesNL }}", "{{ bonushealth }} -> {{ bonushealthNL }}"]
        },
        maxrank: 3,
        cooldown: [120, 100, 80],
        cooldownBurn: "120/100/80",
        cost: [100, 100, 100],
        costBurn: "100",
        datavalues: {},
        effect: [null, [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: " {{ abilityresourcename }}",
        maxammo: "-1",
        range: [600, 600, 600],
        rangeBurn: "600",
        image: {
          full: "AnnieR.png",
          sprite: "spell1.png",
          group: "spell",
          x: 288,
          y: 0,
          w: 48,
          h: 48
        },
        resource: "{{ cost }} {{ abilityresourcename }}"
      }],
    passive: {
      name: "Pyromania",
      description: "After casting 4 spells, Annie's next offensive spell will stun the target.",
      image: {
        full: "Annie_Passive.png",
        sprite: "passive0.png",
        group: "passive",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      }
    },
  }
]