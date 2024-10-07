// @ts-nocheck
const METADATA = {
    website: "https://github.com/Lawsonwang",
    author: "Lawsonwang",
    name: "Shapez 1.5 Mod",
    version: "__DEV__",
    id: "shapez_1_5_mod",
    description: "Shapez 1.5 Mod",
    minimumGameVersion: ">=1.5.0",
};

const _DEV_MODE = true;
const _DEV_REQUIRED = 8;

// Translations

const TRANSLATIONS = {};
TRANSLATIONS["en"] = {
    keybindings: {
        mappings: {
            shape_swapper: "Shape Swapper (mod)",
            pin_pusher: "Pin Pusher (mod)",
            crystal_generator: "Crystal Generator (mod)",
        },
    },
    shopUpgrades: {
        belt: {
            name: "Belts, Distributor & Tunnels",
            description: "Speed x<currentMult> → x<newMult>"
        },
        miner: {
            name: "Extraction",
            description: "Speed x<currentMult> → x<newMult>"
        },
        processors: {
            name: "Cutting, Rotating, Stacking & Pin Pushing",
            description: "Speed x<currentMult> → x<newMult>"
        },
        painting: {
            name: "Mixing, Painting & Crystal Generating",
            description: "Speed x<currentMult> → x<newMult>"
        },
    },
    buildings: {
        shape_swapper: {
            default: {
                name: "Shape Swapper",
                description: "Swaps the right part of two shapes."
            }
        },
        pin_pusher: {
            default: {
                name: "Pin Pusher",
                description: "Pushes a <strong>Pin</strong> under every <strong>non-empty</strong> quarter on the <strong>first layer</strong>."
            }
        },
        crystal_generator: {
            default: {
                name: "Crystal Generator",
                description: "Fills <strong>Gaps</strong> and <strong>Pins</strong> of a shape with color, and harden it into <strong>Crystal</strong>."
            },
            mirrored: {
                name: "Crystal Generator",
                description: "Fills <strong>Gaps</strong> and <strong>Pins</strong> of a shape with color, and harden it into <strong>Crystal</strong>."
            }
        },
        virtual_processor: {
            shape_swapper: {
                name: "Virtual Swapper",
                description: "Virtually swaps the right part of two shapes."
            },
            pin_pusher: {
                name: "Virtual Pin Pusher",
                description: "Virtually pushes <strong>Pins</strong>."
            },
            crystal_generator: {
                name: "Virtual Crystal Generator",
                description: "Virtually <strong>Crystallizing</strong> a shape."
            }
        },
    },
    storyRewards: {
        // Blueprint rewards
        reward_storage: {
            title: "Storage",
            desc: "You have unlocked the <strong>storage</strong> building - It allows you to store items up to a given capacity!<br><br>\
            It prioritizes the left output, so you can also use it as an <strong>overflow gate</strong>!<br><br>\
            <strong>Besides</strong>, you have also unlocked the <strong>Upgraded Blueprint Shape II</strong> (Those you just delivered) - Delivering one of this shape will give you <strong>2 blueprint shapes</strong>!",
        },
        reward_filter: {
            title: "Item Filter",
            desc: "You unlocked the <strong>Item Filter</strong>! It will route items either to the top or the right output depending on whether they match the signal from the wires layer or not.<br><br>\
            You can also pass in a boolean signal (1 or 0) to entirely activate or disable it.<br><br>\
            <strong>Besides</strong>, you have also unlocked the <strong>Upgraded Blueprint Shape III</strong> (Those you just delivered) - Delivering one of this shape will give you <strong>4 blueprint shapes</strong>!",
        },

        reward_shape_swapper: {
            title: "Shape Swapper",
            desc: "You have unlocked the <strong>Shape Swapper</strong>\
            - It swaps the right half of two input <strong>shapes</strong>.",
        },
        reward_pin_pusher: {
            title: "Pin Pusher",
            desc: "You have unlocked the <strong>Pin Pusher</strong>\
            - It pushes a <strong>Pin</strong> under every <strong>non-empty</strong> quarter on the <strong>first layer</strong>.<br><br>\
            While shape quarters that are not connected will <strong>fall</strong> when stacked, you can build shapes that are impossible to build otherwise with <strong>Pins</strong>.",
        },
        reward_crystal_generator: {
            title: "Crystals",
            desc: "You have unlocked the <strong>Crystal Generator</strong>\
            - It creates <strong>Crystals</strong> by filling <strong>Gaps</strong> and <strong>Pins</strong> of a shape with color, and harden it into <strong>Crystal</strong>.<br><br>\
            The <strong>Crystals</strong> are <strong>fragile</strong>, that means:<br><br>\
            1. When a crystal shatters, it shatters <strong>all connected crystals</strong> as well.<br>\
            2. A crystal will shatter if it <strong>falls</strong>. This can happen if it is in the <strong>top shape</strong> of a <strong>Stacker</strong>, or if it falls due to gravity in another operation.<br>\
            3. A crystal will also shatter if it is separated from another connected crystal part.",
        },
    },
    ingame: {
        colors: {
            undefined: "Pin",
        }
    },
};
TRANSLATIONS["zh-CN"] = {
    keybindings: {
        mappings: {
            shape_swapper: "交换器 (mod)",
            pin_pusher: "顶针器 (mod)",
            crystal_generator: "晶体生成器 (mod)",
        },
    },
    shopUpgrades: {
        belt: {
            name: "传送、分发、隧道",
            description: "效率 <currentMult> 倍 → <newMult> 倍"
        },
        miner: {
            name: "开采",
            description: "效率 <currentMult> 倍 → <newMult> 倍"
        },
        processors: {
            name: "切割、旋转、堆叠、顶针",
            description: "效率 <currentMult> 倍 → <newMult> 倍"
        },
        painting: {
            name: "混色、上色、结晶",
            description: "效率 <currentMult> 倍 → <newMult> 倍"
        },
    },
    buildings: {
        shape_swapper: {
            default: {
                name: "交换器",
                description: "交换两个<strong>图形</strong>的<strong>右</strong>半部分。"
            }
        },
        pin_pusher: {
            default: {
                name: "顶针器",
                description: "将图形向上推顶，并在第一层每个非空块下方安装<strong>针销</strong>。"
            }
        },
        crystal_generator: {
            default: {
                name: "晶体生成器",
                description: "将颜料填充到一个图形的<strong>空隙</strong>和<strong>针销</strong>中，并使其硬化为<strong>晶体</strong>。"
            },
            mirrored: {
                name: "晶体生成器",
                description: "将颜料填充到一个图形的<strong>空隙</strong>和<strong>针销</strong>中，并使其硬化为<strong>晶体</strong>。"
            }
        },
        virtual_processor: {
            shape_swapper: {
                name: "模拟交换器",
                description: "模拟交换两个<strong>图形</strong>的<strong>右</strong>半部分。"
            },
            pin_pusher: {
                name: "模拟顶针器",
                description: "模拟给一个图形添加顶针。"
            },
            crystal_generator: {
                name: "模拟晶体生成器",
                description: "模拟将一个图形晶体化。"
            }
        },
    },
    storyRewards: {
        // Blueprint rewards
        reward_storage: {
            title: "存储器",
            desc: "您已经解锁了<strong>存储器</strong>，它能存满指定容量的物品！<br>\
            它<strong>优先从左边</strong>输出，这样您就可以用它做一个<strong>溢流门</strong>了！<br><br>\
            <strong>另外</strong>，您也解锁了<strong>二级蓝图图形</strong>（您刚刚交付的图形）：交付一个此图形会给你带来 <strong>2 个蓝图图形</strong>！",
        },
        reward_filter: {
            title: "物品过滤器",
            desc: "恭喜！您解锁了<strong>物品过滤器</strong>！它会根据在电线层上输入的信号决定是从上面还是右边输出物品。<br><br>\
            您也可以输入开关值（1 / 0）信号来激活或者禁用它。<br><br>\
            <strong>另外</strong>，您也解锁了<strong>三级蓝图图形</strong>（您刚刚交付的图形）：交付一个此图形会给你带来 <strong>4 个蓝图图形</strong>！",
        },

        reward_shape_swapper: {
            title: "交换器",
            desc: "恭喜！您解锁了<strong>交换器</strong>！它会将将输入的<strong>图形</strong>的右半部分交换。",
        },
        reward_pin_pusher: {
            title: "顶针器",
            desc: "恭喜！您解锁了<strong>顶针器</strong>！它会将图形向上推顶，并在第一层每个非空块下方安装<strong>针销（顶针）</strong>。<br><br>\
            当图形堆叠时，<strong>未相连</strong>的象限块将会<strong>掉落</strong>。然而，使用顶针，您就可以制造常规方式无法制造的图形！"
        },
        reward_crystal_generator: {
            title: "晶体",
            desc: "恭喜！您解锁了<strong>晶体生成器</strong>！它会将颜料填充进图形中的<strong>空隙</strong>和<strong>针销</strong>并将其硬化成为晶体。<br><br>\
            <strong>晶体</strong>非常脆弱，容易<strong>碎裂</strong>。这意味着：<br><br>\
            1. 当一块晶体<strong>碎裂</strong>时，<strong>所有与之相连的晶体</strong>均会同时<strong>碎裂</strong>。<br>\
            2. 一块晶体会在其摔落时<strong>碎裂</strong>。这包括当其作为<strong>堆叠器</strong>的<strong>上层图形</strong>，或是在进行其他操作时未与底层相连而因重力而掉落。<br>\
            3. 一块晶体与其他<strong>相连晶体</strong>切割分离时也会碎裂。",
        },
    },
    ingame: {
        colors: {
            undefined: "顶针",
        }
    },
};


const BLUEPRINT_SHAPE_KEY = "RbCbRbCb:CwCwCwCw";
const BLUEPRINT_SHAPE_KEY_2 = "RbP-RbP-:SwRuSwRu";
const BLUEPRINT_SHAPE_KEY_3 = "RbcwRbcw:cbcbcbcb:CwCwCwCw";

const INF_SHAPE_1 = "RyCyRyCy:Cr--Cr--:CwCwCwCw:cpcpcpcp";
const INF_SHAPE_2 = "cgcycbcr:cycbcrcg:cbcrcgcy:crcgcycb";
const INF_SHAPE_3 = "--P---P-:------P-:Cu--Cucr";

const logger = _DEV_MODE ? shapez.createLogger(METADATA["name"]) : { log: () => { } };

const shapeSwapperProcessorType = "shape_swapper";
const pinPusherProcessorType = "pin_pusher";
const crystalGeneratorProcessorType = "crystal_generator";

const enumModShape = {
    pin: "pin",
    crystal: "crystal",
};

const enumCrystalGeneratorVariants = { mirrored: "mirrored" };


// start Buildings

class MetaPinPusherBuilding extends shapez.ModMetaBuilding {
    constructor() {
        super("pin_pusher");
    }

    static getAllVariantCombinations() {
        return [
            {
                variant: shapez.defaultBuildingVariant,
                name: "_pin_pusher",
                description: "_pin_pusher_desc",

                regularImageBase64: RESOURCES["buildings"]["pin_pusher.png"],
                blueprintImageBase64: RESOURCES["blueprints"]["pin_pusher.png"],
                tutorialImageBase64: RESOURCES["tutorials"]["pin_pusher.png"],
            },
        ];
    }

    getSilhouetteColor() {
        return "#C6D048";
    }

    getDimensions(variant = shapez.defaultBuildingVariant) {
        return new shapez.Vector(1, 1);
    }

    getAdditionalStatistics(root) {
        const speed = root.hubGoals.getProcessorBaseSpeed(shapez.enumItemProcessorTypes.pin_pusher);
        return [[shapez.T.ingame.buildingPlacement.infoTexts.speed, shapez.formatItemsPerSecond(speed)]];
    }

    getIsUnlocked(root) {
        return root.hubGoals.isRewardUnlocked(R.reward_pin_pusher);
    }

    setupEntityComponents(entity) {
        entity.addComponent(
            new shapez.ItemAcceptorComponent({
                slots: [
                    { pos: new shapez.Vector(0, 0), direction: shapez.enumDirection.bottom, filter: "shape", },
                ],
            })
        );
        entity.addComponent(
            new shapez.ItemProcessorComponent({
                inputsPerCharge: 1,
                processorType: pinPusherProcessorType,
            })
        );
        entity.addComponent(
            new shapez.ItemEjectorComponent({
                slots: [
                    { pos: new shapez.Vector(0, 0), direction: shapez.enumDirection.top },
                ],
            })
        );
    }
}

class MetaShapeSwapperBuilding extends shapez.ModMetaBuilding {
    constructor() {
        super("shape_swapper");
    }

    static getAllVariantCombinations() {
        return [
            {
                variant: shapez.defaultBuildingVariant,
                name: "_shape_swapper",
                description: "_shape_swapper_desc",

                regularImageBase64: RESOURCES["buildings"]["shape_swapper.png"],
                blueprintImageBase64: RESOURCES["blueprints"]["shape_swapper.png"],
                tutorialImageBase64: RESOURCES["tutorials"]["shape_swapper.png"],
            },
        ];
    }

    getSilhouetteColor() {
        return "#114514";
    }

    getDimensions(variant = shapez.defaultBuildingVariant) {
        return new shapez.Vector(2, 1);
    }

    getAdditionalStatistics(root) {
        const speed = root.hubGoals.getProcessorBaseSpeed(shapez.enumItemProcessorTypes.shape_swapper);
        return [[shapez.T.ingame.buildingPlacement.infoTexts.speed, shapez.formatItemsPerSecond(speed)]];
    }

    getIsUnlocked(root) {
        return root.hubGoals.isRewardUnlocked(R.reward_shape_swapper);
    }

    setupEntityComponents(entity) {
        entity.addComponent(
            new shapez.ItemAcceptorComponent({
                slots: [
                    { pos: new shapez.Vector(0, 0), direction: shapez.enumDirection.bottom, filter: "shape", },
                    { pos: new shapez.Vector(1, 0), direction: shapez.enumDirection.bottom, filter: "shape", },
                ],
            })
        );
        entity.addComponent(
            new shapez.ItemProcessorComponent({
                inputsPerCharge: 2,
                processorType: shapeSwapperProcessorType,
            })
        );
        entity.addComponent(
            new shapez.ItemEjectorComponent({
                slots: [
                    { pos: new shapez.Vector(0, 0), direction: shapez.enumDirection.top },
                    { pos: new shapez.Vector(1, 0), direction: shapez.enumDirection.top },
                ],
            })
        );
    }
}

class MetaCrystalGeneratorBuilding extends shapez.ModMetaBuilding {
    constructor() {
        super("crystal_generator");
    }

    static getAllVariantCombinations() {
        return [
            {
                variant: shapez.defaultBuildingVariant,
                name: "_crystal_generator",
                description: "_crystal_generator_desc",

                regularImageBase64: RESOURCES["buildings"]["crystal_generator.png"],
                blueprintImageBase64: RESOURCES["blueprints"]["crystal_generator.png"],
                tutorialImageBase64: RESOURCES["tutorials"]["crystal_generator.png"],
            },
            {
                variant: enumCrystalGeneratorVariants.mirrored,
                name: "_crystal_generator_mirrored",
                description: "_crystal_generator_mirrored_desc",

                regularImageBase64: RESOURCES["buildings"]["crystal_generator_mirrored.png"],
                blueprintImageBase64: RESOURCES["blueprints"]["crystal_generator_mirrored.png"],
                tutorialImageBase64: RESOURCES["tutorials"]["crystal_generator_mirrored.png"],
            },
        ];
    }

    getDimensions(variant = shapez.defaultBuildingVariant) {
        return new shapez.Vector(2, 1);
    }

    getSilhouetteColor() {
        return "#E44CC4";
    }

    getAdditionalStatistics(root, variant) {
        const speed = root.hubGoals.getProcessorBaseSpeed(shapez.enumItemProcessorTypes.crystal_generator);
        return [[shapez.T.ingame.buildingPlacement.infoTexts.speed, shapez.formatItemsPerSecond(speed)]];
    }

    getIsUnlocked(root) {
        return root.hubGoals.isRewardUnlocked(R.reward_crystal_generator);
    }

    /**
     * @param {GameRoot} root
     */
    getAvailableVariants(root) {
        return [shapez.defaultBuildingVariant, enumCrystalGeneratorVariants.mirrored];
    }

    setupEntityComponents(entity) {
        entity.addComponent(
            new shapez.ItemAcceptorComponent({
                slots: [
                    { pos: new shapez.Vector(0, 0), direction: shapez.enumDirection.left, filter: "shape", },
                    { pos: new shapez.Vector(1, 0), direction: shapez.enumDirection.top, filter: "color", },
                ],
            })
        );
        entity.addComponent(
            new shapez.ItemProcessorComponent({
                inputsPerCharge: 2,
                processorType: crystalGeneratorProcessorType,
            })
        );
        entity.addComponent(
            new shapez.ItemEjectorComponent({
                slots: [
                    { pos: new shapez.Vector(1, 0), direction: shapez.enumDirection.right },
                ],
            })
        );
    }

    /**
     *
     * @param {Entity} entity
     * @param {number} rotationVariant
     * @param {string} variant
     */
    updateVariants(entity, rotationVariant, variant) {
        const colorDir = variant === shapez.defaultBuildingVariant ? shapez.enumDirection.top : shapez.enumDirection.bottom;
        entity.components.ItemAcceptor.setSlots([
            { pos: new shapez.Vector(0, 0), direction: shapez.enumDirection.left, filter: "shape", },
            { pos: new shapez.Vector(1, 0), direction: colorDir, filter: "color", },
        ]);

        entity.components.ItemEjector.setSlots([
            { pos: new shapez.Vector(1, 0), direction: shapez.enumDirection.right },
        ]);
    }
}

// end Buildings


const enumHexCodeToColors = {};
const enumCrystalColors = {
    red: ["#ff0000", "#993333"],
    green: ["#00ff00", "#339933"],
    blue: ["#0000ff", "#333399"],
    yellow: ["#ffff00", "#999933"],
    purple: ["#ff00ff", "#993399"],
    cyan: ["#00ffff", "#339999"],
    white: ["#ffffff", "#999999"],
    uncolored: ["#aaaaaa", "#444444"],
}

function initColors() {
    for (const color in shapez.enumColorsToHexCode) {
        enumHexCodeToColors[shapez.enumColorsToHexCode[color]] = color;
    }
}


function _test() {
    // const sd1 = shapez.ShapeDefinition.fromShortKey('crcrcrcr:crCuCuCu:crcrcrCu:CuCuCucr');
    // logger.log(searchConnected(sd1, 0, 0, true));
    // const sd2 = shapez.ShapeDefinition.fromShortKey('CuCuCuCu:--crcr--:--CucrCu:CucrCuCu');
    // logger.log(searchConnected(sd2, 1, 1, false));

    // const sd3 = shapez.ShapeDefinition.fromShortKey('----Cu--:Cu----cr:CuCuCucr');
    // const sd3 = shapez.ShapeDefinition.fromShortKey('----Cu--:--Cu----:Cu----cr:CuCuCucr');
    // logger.log(getFallDownDistance(sd3, searchConnected(sd3, 3, 3)));
    // const sd4 = shapez.ShapeDefinition.fromShortKey('----Cu--:--Cu----:Cu----cr:Cu--Cucr');
    // logger.log(getFallDownDistance(sd4, searchConnected(sd4, 3, 3)));

    // const sd5 = shapez.ShapeDefinition.fromShortKey('cr--Cu--:--Cu----:Cu----cr:Cu--Cucr');
    // logger.log(getAllConnected(sd5.layers));
    // logger.log(sd5.cloneFallDown().getHash());

    // const sd6 = shapez.ShapeDefinition.fromShortKey('P-------:P-----P-:P---CuCu:CuCuCuCu');
    // logger.log(getAllConnected(sd6.layers));
    // logger.log(sd6.cloneFallDown().getHash());

    // const sd7 = shapez.ShapeDefinition.fromShortKey('P-------:P---Cu--:P---crCu:CuCuCuCu');
    // logger.log(getAllConnected(sd7.layers));
    // logger.log(sd7.cloneFallDown().getHash());

    // const sd8 = shapez.ShapeDefinition.fromShortKey('crCuCuCu:crCuCucr:CuCuCuCu:crcrCuCu');
    // logger.log(sd8.cloneBreakMedium().getHash());
}

const R = shapez.enumHubGoalRewards;

R.reward_shape_swapper = "reward_shape_swapper";
R.reward_pin_pusher = "reward_pin_pusher";
R.reward_crystal_generator = "reward_crystal_generator";

function getLevels() {
    const LevelsForVariant = [
        // 1 Blueprint I
        {
            shape: "RbCbRbCb:CwCwCwCw",
            required: 50,
            reward: R.reward_blueprints,
        },
        // 2
        {
            shape: "RgRyRbRr",
            required: 100,
            reward: R.reward_shape_swapper,
        },
        // 3
        {
            shape: "CgCgRrRr:RrRrCgCg:WuWuSbSb:SbSbWuWu",
            required: 200,
            reward: R.reward_wires_painter_and_levers,
        },
        // 4
        {
            shape: "RgRyRbRr:WgWyWbWr",
            required: 500,
            reward: R.reward_pin_pusher,
        },

        // 5 Blueprint II
        {
            shape: "RbP-RbP-:SwRuSwRu",
            required: 1000,
            reward: R.reward_storage,
        },
        // 6
        {
            shape: "CyCyCyCy:P-CrCrP-:P-P-P-P-:WyRwRwWy",
            required: 2000,
            reward: R.reward_underground_belt_tier_2,
        },
        // 7
        {
            shape: "RwCpRpCw:P-P-P---:RpCwRw--:--CpRpCp",
            required: 4000,
            reward: R.reward_painter_double,
        },
        // 8
        {
            shape: "RyCyCyRy:SrP-P-Sr:CrCrCrCr:P-CwCwP-",
            required: 8000,
            reward: R.reward_crystal_generator,
        },

        // 9
        {
            shape: "cbcbcbcb:CwCwCwCw",
            required: 10000,
            reward: R.reward_splitter,
        },
        // 10 Blueprint III
        {
            shape: "RbcwRbcw:cbcbcbcb:CwCwCwCw",
            required: 12000,
            reward: R.reward_filter,
        },
        // 11
        {
            shape: "crCwcrCw:CwcrCwcr:crCwcrCw:cwcwcwcw",
            required: 14000,
            reward: R.reward_constant_signal,
        },
        // 12
        {
            shape: "cbcbcrcr",
            required: 16000,
            reward: R.reward_display,
        },

        // 13
        {
            shape: "P-P-cycy:cpcpcrcr:cwcwcwcw:WpWpWrWr",
            required: 16000,
            reward: R.reward_logic_gates,
        },
        // 14
        {
            shape: "RyCyRyCy:Cr--Cr--:CwCwCwCw:cpcpcpcp",
            required: 16000,
            reward: R.reward_virtual_processing,
        },
        // 15
        {
            shape: "cgcycbcr:cycbcrcg:cbcrcgcy:crcgcycb",
            required: 16000,
            reward: R.no_reward,
        },
        // 16
        {
            shape: "--P---P-:------P-:Cu--Cucr",
            required: 16000,
            reward: R.reward_freeplay,
        },
    ];
    return LevelsForVariant.map((value, index) => ({
        shape: value.shape,
        required: (_DEV_MODE ? _DEV_REQUIRED : value.required),
        reward: value.reward,
    }));
}

function getUpgrades() {
    const fixedImprovements = [1, 1, 1, 1, 1, 1];
    const numEndgameUpgrades = 1000 - fixedImprovements.length - 1;

    function generateInfiniteUnlocks() {
        return new Array(numEndgameUpgrades).fill(null).map((_, i) => ({
            required: [
                { shape: INF_SHAPE_1, amount: 40000 + i * 10000 },
                { shape: INF_SHAPE_2, amount: 20000 + i * 5000 },
                { shape: INF_SHAPE_3, amount: 20000 + i * 5000 },
            ],
            excludePrevious: true,
        }));
    }

    // Fill in endgame upgrades
    for (let i = 0; i < numEndgameUpgrades; ++i) {
        if (i < 20) {
            fixedImprovements.push(0.1);
        } else if (i < 50) {
            fixedImprovements.push(0.05);
        } else if (i < 100) {
            fixedImprovements.push(0.025);
        } else {
            fixedImprovements.push(0.0125);
        }
    }

    const upgrades = {
        belt: [
            { required: [{ shape: "CrCrCrCr", amount: 200 }], },
            { required: [{ shape: "RgCbRgCb:CbCgCbCg", amount: 500 }], },
            { required: [{ shape: "RuCwP-Cw:----Ru--", amount: 1200 }], },
            { required: [{ shape: "CwcrCwcr:crCwcrCw", amount: 4000 }], },
            { required: [{ shape: INF_SHAPE_1, amount: 10000 }], excludePrevious: true, },
            { required: [{ shape: INF_SHAPE_1, amount: 20000 }, { shape: INF_SHAPE_2, amount: 10000 },], excludePrevious: true, },
            ...generateInfiniteUnlocks(),
        ],

        miner: [
            { required: [{ shape: "RbRbRbRb", amount: 200 }], },
            { required: [{ shape: "CrCuCrRu:CuCrCuCr", amount: 500 }], },
            { required: [{ shape: "P-CuP-Cu:RrP-RrP-:--Rb--Rb", amount: 1200 }], },
            { required: [{ shape: "P-cccccc:cp------", amount: 4000 }], },
            { required: [{ shape: INF_SHAPE_1, amount: 10000 }], excludePrevious: true, },
            { required: [{ shape: INF_SHAPE_1, amount: 20000 }, { shape: INF_SHAPE_2, amount: 10000 },], excludePrevious: true, },
            ...generateInfiniteUnlocks(),
        ],

        processors: [
            { required: [{ shape: "CgCgCuCu", amount: 200 }], },
            { required: [{ shape: "Cg------:Cr------", amount: 500 }], },
            { required: [{ shape: "SbP-P-Sb:--WbWb--:CuCuCuCu:P-CbCbP-", amount: 1200 }], },
            { required: [{ shape: "cbcbcrcr:cgcgcgcg:WuWuWuWu", amount: 4000 }], },
            { required: [{ shape: INF_SHAPE_1, amount: 10000 }], excludePrevious: true, },
            { required: [{ shape: INF_SHAPE_1, amount: 20000 }, { shape: INF_SHAPE_2, amount: 10000 },], excludePrevious: true, },
            ...generateInfiniteUnlocks(),
        ],

        painting: [
            { required: [{ shape: "ScScScSc", amount: 200 }], },
            { required: [{ shape: "RgRyRbRr:WgWyWbWr", amount: 500 }], },
            { required: [{ shape: "RyCyCyRy:SrP-P-Sr:CrCrCrCr:P-CwCwP-", amount: 1200 }], },
            { required: [{ shape: "cgcycbcr:WuWuWuWu", amount: 4000 }], },
            { required: [{ shape: INF_SHAPE_1, amount: 10000 }], excludePrevious: true, },
            { required: [{ shape: INF_SHAPE_1, amount: 20000 }, { shape: INF_SHAPE_2, amount: 10000 },], excludePrevious: true, },
            ...generateInfiniteUnlocks(),
        ],
    };

    const difficulty = 1;
    const tierGrowth = 2;

    // Automatically generate tier levels
    for (const upgradeId in upgrades) {
        const upgradeTiers = upgrades[upgradeId];

        let currentTierRequirements = [];
        for (let i = 0; i < upgradeTiers.length; ++i) {
            const tierHandle = upgradeTiers[i];
            tierHandle.improvement = fixedImprovements[i];

            tierHandle.required.forEach(required => {
                required.amount = Math.round(required.amount * difficulty);
                if (_DEV_MODE) required.amount = _DEV_REQUIRED;
            });
            const originalRequired = tierHandle.required.slice();

            // add previous required
            if (!tierHandle.excludePrevious) {
                for (let k = currentTierRequirements.length - 1; k >= 0; --k) {
                    const oldTierRequirement = currentTierRequirements[k];
                    tierHandle.required.unshift({
                        shape: oldTierRequirement.shape,
                        amount: oldTierRequirement.amount,
                    });
                }
            }

            // update for next tier
            currentTierRequirements.push(
                ...originalRequired.map(req => ({
                    amount: req.amount,
                    shape: req.shape,
                }))
            );
            currentTierRequirements.forEach(tier => {
                tier.amount = tier.amount * tierGrowth;
                if (_DEV_MODE) tier.amount = _DEV_REQUIRED;
            });
        }
    }
    return upgrades;
}


class Mod extends shapez.Mod {
    init() {
        initColors();
        for (const ClassName in STATIC_EXTENSION) {
            this.modInterface.extendObject(shapez[ClassName], STATIC_EXTENSION[ClassName]);
        }
        for (const ClassName in CLASS_EXTENSION) {
            this.modInterface.extendClass(shapez[ClassName], CLASS_EXTENSION[ClassName]);
        }
        for (const Signal in SIGNAL_FUNCTION) {
            this.signals[Signal].add(SIGNAL_FUNCTION[Signal]);
        }
        this.addSwapper();
        this.addPinPusher();
        this.addCrystalGenerator();
        this.addVirtualSwapper();
        this.addVirtualPinPusher();
        this.addVirtualCrystalGenerator();
        addModShapeDefinitions(this.modInterface);

        for (const Language in TRANSLATIONS) {
            this.modInterface.registerTranslations(Language, TRANSLATIONS[Language]);
        }

        this.addRewardsShow();

        if (_DEV_MODE) {
            _test();
        }
    }

    addRewardsShow() {  // 过关图片展示
        const typed = x => x;
        const R2C = shapez.enumHubGoalRewardsToContentUnlocked;
        R2C[R.reward_shape_swapper] = typed([[MetaShapeSwapperBuilding, shapez.defaultBuildingVariant]]);
        R2C[R.reward_pin_pusher] = typed([[MetaPinPusherBuilding, shapez.defaultBuildingVariant]]);
        R2C[R.reward_crystal_generator] = typed([[MetaCrystalGeneratorBuilding, shapez.defaultBuildingVariant]]);
    }

    addSwapper() {
        shapez.enumItemProcessorTypes.shape_swapper = shapeSwapperProcessorType;

        registerShapeSwapperProcessorType(this.modInterface);
        addShapeSwapperProcessRequirement(this.modInterface);
        this.modInterface.registerNewBuilding({
            metaClass: MetaShapeSwapperBuilding,
            buildingIconBase64: RESOURCES["icons"]["shape_swapper.png"],
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "regular",
            location: "primary",
            metaClass: MetaShapeSwapperBuilding,
        });

        shapez.KEYMAPPINGS.buildings.shape_swapper = { id: "shape_swapper", keyCode: 219 };
    }

    addPinPusher() {
        shapez.enumItemProcessorTypes.pin_pusher = pinPusherProcessorType;

        registerPinPusherProcessorType(this.modInterface);
        addPinPusherProcessRequirement(this.modInterface);
        this.modInterface.registerNewBuilding({
            metaClass: MetaPinPusherBuilding,
            buildingIconBase64: RESOURCES["icons"]["pin_pusher.png"],
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "regular",
            location: "primary",
            metaClass: MetaPinPusherBuilding,
        });

        shapez.KEYMAPPINGS.buildings.pin_pusher = { id: "pin_pusher", keyCode: 221 };
    }

    addCrystalGenerator() {
        shapez.enumItemProcessorTypes.crystal_generator = crystalGeneratorProcessorType;

        registerCrystalGeneratorProcessorType(this.modInterface);
        addCrystalGeneratorProcessRequirement(this.modInterface);
        this.modInterface.registerNewBuilding({
            metaClass: MetaCrystalGeneratorBuilding,
            buildingIconBase64: RESOURCES["icons"]["crystal_generator.png"],
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "regular",
            location: "primary",
            metaClass: MetaCrystalGeneratorBuilding,
        });

        shapez.KEYMAPPINGS.buildings.crystal_generator = { id: "crystal_generator", keyCode: 220 };
    }

    addVirtualSwapper() {
        shapez.enumVirtualProcessorVariants.shape_swapper = shapeSwapperProcessorType;
        shapez.enumLogicGateType.shape_swapper = shapeSwapperProcessorType;

        this.modInterface.addVariantToExistingBuilding(
            shapez.MetaVirtualProcessorBuilding,
            shapez.enumVirtualProcessorVariants.shape_swapper,
            {
                name: "_shape_swapper",
                description: "_desc",

                tutorialImageBase64: RESOURCES["tutorials"]["vp_shape_swapper.png"],
                regularSpriteBase64: RESOURCES["buildings"]["vp_shape_swapper.png"],
                blueprintSpriteBase64: RESOURCES["blueprints"]["vp_shape_swapper.png"],

                dimensions: new shapez.Vector(2, 1),

                isUnlocked(root) {
                    return true;
                },
            }
        );
    }

    addVirtualPinPusher() {
        shapez.enumVirtualProcessorVariants.pin_pusher = pinPusherProcessorType;
        shapez.enumLogicGateType.pin_pusher = pinPusherProcessorType;

        this.modInterface.addVariantToExistingBuilding(
            shapez.MetaVirtualProcessorBuilding,
            shapez.enumVirtualProcessorVariants.pin_pusher,
            {
                name: "_pin_pusher",
                description: "_desc",

                tutorialImageBase64: RESOURCES["tutorials"]["vp_pin_pusher.png"],
                regularSpriteBase64: RESOURCES["buildings"]["vp_pin_pusher.png"],
                blueprintSpriteBase64: RESOURCES["blueprints"]["vp_pin_pusher.png"],

                dimensions: new shapez.Vector(1, 1),

                isUnlocked(root) {
                    return true;
                },
            }
        );
    }

    addVirtualCrystalGenerator() {
        shapez.enumVirtualProcessorVariants.crystal_generator = crystalGeneratorProcessorType;
        shapez.enumLogicGateType.crystal_generator = crystalGeneratorProcessorType;

        this.modInterface.addVariantToExistingBuilding(
            shapez.MetaVirtualProcessorBuilding,
            shapez.enumVirtualProcessorVariants.crystal_generator,
            {
                name: "_crystal_generator",
                description: "_desc",

                tutorialImageBase64: RESOURCES["tutorials"]["vp_crystal_generator.png"],
                regularSpriteBase64: RESOURCES["buildings"]["vp_crystal_generator.png"],
                blueprintSpriteBase64: RESOURCES["blueprints"]["vp_crystal_generator.png"],

                dimensions: new shapez.Vector(1, 1),

                isUnlocked(root) {
                    return true;
                },
            }
        );
    }
}

// 重复造轮子，爽！
// /**
//  * @param {string} id
//  * @param {string} shortCode
//  */
// function addModShape(id, shortCode) {
//     if (shortCode.length !== 1) {
//         throw new Error("Bad short code: " + shortCode);
//     }
//     shapez.enumSubShape[id] = id;
//     shapez.enumSubShapeToShortcode[id] = shortCode;
//     shapez.enumShortcodeToSubShape[shortCode] = id;
// }

function addModShapeDefinitions(modInterface) {
    modInterface.registerSubShapeType({
        id: enumModShape.pin,
        shortCode: "P",
        weightComputation: distanceToOriginInChunks => 0,
        draw: ({ context, quadrantSize, layerScale }) => {
            context.fillStyle = shapez.enumColorsToHexCode[shapez.enumColors.uncolored];
            const quadrantHalfSize = quadrantSize / 2;
            context.beginPath();
            context.moveTo(-quadrantHalfSize, quadrantHalfSize);
            const R = quadrantSize * layerScale, r = quadrantSize * layerScale / 4;
            const lR = R * Math.sqrt(2) / 2, lr = r * Math.sqrt(2) / 2;
            context.moveTo(-quadrantHalfSize + lR - lr, quadrantHalfSize - lR + lr);
            context.arc(-quadrantHalfSize + lR, quadrantHalfSize - lR, r, 3 / 4 * Math.PI, 11 / 4 * Math.PI);
            context.closePath();
            context.fill();
            context.stroke();
        },
    });
    modInterface.registerSubShapeType({
        id: enumModShape.crystal,
        shortCode: "c",
        weightComputation: distanceToOriginInChunks => 0,
        draw: ({ context, quadrantSize, layerScale }) => {
            // The shapez's chrome version is so outdated that i can't use createConicGradient.
            // ugly code :(((((((((((((((((((

            const quadrantHalfSize = quadrantSize / 2;

            const color = enumHexCodeToColors[context.fillStyle];
            const R = quadrantSize * layerScale;
            const gradient = context.createLinearGradient(-quadrantHalfSize, quadrantHalfSize - R, -quadrantHalfSize + R, quadrantHalfSize);
            gradient.addColorStop(0, enumCrystalColors[color][0]);
            gradient.addColorStop(0.5, enumCrystalColors[color][1]);
            gradient.addColorStop(1, enumCrystalColors[color][0]);

            context.fillStyle = gradient;
            context.strokeStyle = gradient;
            context.beginPath();
            context.moveTo(-quadrantHalfSize, quadrantHalfSize);
            context.arc(-quadrantHalfSize, quadrantHalfSize, R, 1.5 * Math.PI, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.stroke();

            context.strokeStyle = shapez.THEME.items.outline;
            context.beginPath();

            context.moveTo(-quadrantHalfSize, quadrantHalfSize + context.lineWidth / 2);
            context.lineTo(-quadrantHalfSize, quadrantHalfSize - R - context.lineWidth / 2);
            context.closePath();
            context.stroke();
            context.moveTo(-quadrantHalfSize - context.lineWidth / 2, quadrantHalfSize);
            context.lineTo(-quadrantHalfSize + R + context.lineWidth / 2, quadrantHalfSize);
            context.closePath();
            context.stroke();
        },
    });
    // addModShape(enumModShape.pin, "P");
    // addModShape(enumModShape.crystal, "c");
}


// start Extends & Signals

const STATIC_EXTENSION = {
    ShapeDefinition: ({ $super, $old }) => ({
        /**
         * Generates the definition from the given short key
         * @param {string} key
         * @returns {ShapeDefinition}
         */
        fromShortKey(key) {  // Modify for Pin & Crystal
            const sourceLayers = key.split(":");
            let layers = [];
            for (let i = 0; i < sourceLayers.length; ++i) {
                const text = sourceLayers[i];
                assert(text.length === 8, "Invalid shape short key: " + key);

                /** @type {ShapeLayer} */
                const quads = [null, null, null, null];
                for (let quad = 0; quad < 4; ++quad) {
                    const shapeText = text[quad * 2 + 0];
                    const colorText = text[quad * 2 + 1];
                    const subShape = shapez.enumShortcodeToSubShape[shapeText];
                    const color = shapez.enumShortcodeToColor[colorText];
                    if (subShape === enumModShape.pin) {
                        assert(colorText === "-", "Invalid shape short key:", key);
                        quads[quad] = {
                            subShape,
                            color,
                        };
                    } else if (subShape) {
                        assert(color, "Invalid shape short key:", key);
                        quads[quad] = {
                            subShape,
                            color,
                        };
                    } else if (shapeText !== "-") {
                        assert(false, "Invalid shape key: " + shapeText);
                    }
                }
                layers.push(quads);
            }

            const definition = new shapez.ShapeDefinition({ layers });
            // We know the hash so save some work
            definition.cachedHash = key;
            return definition;
        },

        /**
         * INTERNAL
         * Checks if a given string is a valid short key
         * @param {string} key
         * @returns {boolean}
         */
        isValidShortKeyInternal(key) {  // Modify for Pin & Crystal
            const sourceLayers = key.split(":");
            const uncolored = shapez.enumColors.uncolored;
            let layers = [];
            for (let i = 0; i < sourceLayers.length; ++i) {
                const text = sourceLayers[i];
                if (text.length !== 8) {
                    return false;
                }

                /** @type {ShapeLayer} */
                const quads = [null, null, null, null];
                let anyFilled = false;
                for (let quad = 0; quad < 4; ++quad) {
                    const shapeText = text[quad * 2 + 0];
                    const colorText = text[quad * 2 + 1];
                    const subShape = shapez.enumShortcodeToSubShape[shapeText];
                    const color = shapez.enumShortcodeToColor[colorText];

                    // Valid shape
                    if (subShape === enumModShape.pin) {
                        if (colorText !== "-") {
                            return false;
                        }
                        quads[quad] = {
                            subShape,
                            color,
                        };
                        anyFilled = true;
                    } else if (subShape) {
                        if (!color) {
                            // Invalid color
                            return false;
                        }
                        quads[quad] = {
                            subShape,
                            color,
                        };
                        anyFilled = true;
                    } else if (shapeText === "-") {
                        // Make sure color is empty then, too
                        if (colorText !== "-") {
                            return false;
                        }
                    } else {
                        // Invalid shape key
                        return false;
                    }
                }

                if (!anyFilled) {
                    // Empty layer
                    return false;
                }
                layers.push(quads);
            }

            if (layers.length === 0 || layers.length > 4) {
                return false;
            }

            return true;
        }
    }),
};

const CLASS_EXTENSION = {
    MetaVirtualProcessorBuilding: ({ $super, $old }) => ({
        getSilhouetteColor(variant) {
            switch (variant) {
                case shapez.enumVirtualProcessorVariants.shape_swapper: {
                    return new MetaShapeSwapperBuilding().getSilhouetteColor();
                }
                case shapez.enumVirtualProcessorVariants.pin_pusher: {
                    return new MetaPinPusherBuilding().getSilhouetteColor();
                }
                case shapez.enumVirtualProcessorVariants.crystal_generator: {
                    return new MetaCrystalGeneratorBuilding().getSilhouetteColor();
                }
                default: {
                    return $old.getSilhouetteColor.bind(this)(variant);
                }
            }
        },
        updateVariants(entity, rotationVariant, variant) {
            switch (variant) {
                case shapez.enumVirtualProcessorVariants.shape_swapper: {
                    entity.components.LogicGate.type = shapez.enumLogicGateType.shape_swapper;
                    const pinComp = entity.components.WiredPins;
                    pinComp.setSlots([
                        {
                            pos: new shapez.Vector(0, 0),
                            direction: shapez.enumDirection.top,
                            type: shapez.enumPinSlotType.logicalEjector,
                        },
                        {
                            pos: new shapez.Vector(0, 0),
                            direction: shapez.enumDirection.bottom,
                            type: shapez.enumPinSlotType.logicalAcceptor,
                        },
                        {
                            pos: new shapez.Vector(1, 0),
                            direction: shapez.enumDirection.top,
                            type: shapez.enumPinSlotType.logicalEjector,
                        },
                        {
                            pos: new shapez.Vector(1, 0),
                            direction: shapez.enumDirection.bottom,
                            type: shapez.enumPinSlotType.logicalAcceptor,
                        },
                    ]);
                    break;
                }
                case shapez.enumVirtualProcessorVariants.pin_pusher: {
                    entity.components.LogicGate.type = shapez.enumLogicGateType.pin_pusher;
                    const pinComp = entity.components.WiredPins;
                    pinComp.setSlots([
                        {
                            pos: new shapez.Vector(0, 0),
                            direction: shapez.enumDirection.top,
                            type: shapez.enumPinSlotType.logicalEjector,
                        },
                        {
                            pos: new shapez.Vector(0, 0),
                            direction: shapez.enumDirection.bottom,
                            type: shapez.enumPinSlotType.logicalAcceptor,
                        },
                    ]);
                    break;
                }
                case shapez.enumVirtualProcessorVariants.crystal_generator: {
                    entity.components.LogicGate.type = shapez.enumLogicGateType.crystal_generator;
                    const pinComp = entity.components.WiredPins;
                    pinComp.setSlots([
                        {
                            pos: new shapez.Vector(0, 0),
                            direction: shapez.enumDirection.top,
                            type: shapez.enumPinSlotType.logicalEjector,
                        },
                        {
                            pos: new shapez.Vector(0, 0),
                            direction: shapez.enumDirection.bottom,
                            type: shapez.enumPinSlotType.logicalAcceptor,
                        },
                        {
                            pos: new shapez.Vector(0, 0),
                            direction: shapez.enumDirection.right,
                            type: shapez.enumPinSlotType.logicalAcceptor,
                        },
                    ]);
                    break;
                }
                default: {
                    $old.updateVariants.bind(this)(entity, rotationVariant, variant);
                }
            }
        }
    }),
    ShapeDefinition: ({ $super, $old }) => ({
        /**
         * Returns a unique id for this shape
         * @returns {string}
        */
        getHash() {  // Modify for Pin
            if (this.cachedHash) {
                return this.cachedHash;
            }

            let id = "";
            for (let layerIndex = 0; layerIndex < this.layers.length; ++layerIndex) {
                const layer = this.layers[layerIndex];

                for (let quadrant = 0; quadrant < layer.length; ++quadrant) {
                    const item = layer[quadrant];
                    if (item) {
                        if (item.subShape == enumModShape.pin) {
                            id += shapez.enumSubShapeToShortcode[item.subShape] + "-";
                        } else {
                            id += shapez.enumSubShapeToShortcode[item.subShape] + shapez.enumColorToShortcode[item.color];
                        }
                    } else {
                        id += "--";
                    }
                }

                if (layerIndex < this.layers.length - 1) {
                    id += ":";
                }
            }
            this.cachedHash = id;
            return id;
        },

        // Addition for shapez2 feature
        cloneFallDown() {
            const newLayers = this.getClonedLayers();
            while (true) {
                const connectedLists = getAllConnected(newLayers);
                let haveFall = false;
                for (let i = 0; i < connectedLists.length; ++i) {
                    const connectedList = connectedLists[i];
                    const distance = getFallDownDistance(newLayers, connectedList);
                    if (distance > 0) {
                        haveFall = true;
                    }
                    for (let j = 0; j < connectedList.length; ++j) {
                        const pos = connectedList[j];
                        const curSubShape = newLayers[pos[0]][pos[1]];
                        newLayers[pos[0]][pos[1]] = null;
                        assert(!newLayers[pos[0] - distance][pos[1]], "The result of getFallDownDistance is invalid!");
                        if (distance === 0 || curSubShape.subShape != enumModShape.crystal) {
                            newLayers[pos[0] - distance][pos[1]] = curSubShape;
                        }
                    }
                }
                if (!haveFall) {
                    break;
                }
            }
            return new shapez.ShapeDefinition({ layers: newLayers });
        },
        cloneBreakMedium() {
            let newLayers = this.getClonedLayers();
            for (let layerIndex = 0; layerIndex < newLayers.length; ++layerIndex) {
                const layer = newLayers[layerIndex];
                if (layer[0] && layer[3] && layer[0].subShape == enumModShape.crystal && layer[3].subShape == enumModShape.crystal) {
                    newLayers = breakCrystal(newLayers, layerIndex, 0);
                }
                if (layer[1] && layer[2] && layer[1].subShape == enumModShape.crystal && layer[2].subShape == enumModShape.crystal) {
                    newLayers = breakCrystal(newLayers, layerIndex, 1);
                }
            }
            return new shapez.ShapeDefinition({ layers: newLayers });
        },
        cloneClearOverheights() {
            let newLayers = this.getClonedLayers();
            for (let layer = 4; layer < newLayers.length; ++layer) {
                for (let quad = 0; quad < 4; ++quad) {
                    if (!newLayers[layer][quad]) continue;
                    if (newLayers[layer][quad].subShape == enumModShape.crystal) {
                        newLayers = breakCrystal(newLayers, layer, quad);
                    } else {
                        newLayers[layer][quad] = null;
                    }
                    if (newLayers.length <= 4) break;
                }
            }
            newLayers.splice(4);
            while (newLayers.length) {
                let allEmpty = true;
                for (let quad = 0; quad < 4; ++quad) {
                    if (newLayers[newLayers.length - 1][quad]) {
                        allEmpty = false;
                        break;
                    }
                }
                if (allEmpty) {
                    newLayers.length -= 1;
                } else {
                    break;
                }
            }
            return new shapez.ShapeDefinition({ layers: newLayers }).cloneFallDown();
        }
    }),
    ShapeDefinitionManager: ({ $super, $old }) => ({
        /**
         * Generates a definition for stacking the upper definition onto the lower one
         * @param {ShapeDefinition} lowerDefinition
         * @param {ShapeDefinition} upperDefinition
         * @returns {ShapeDefinition}
         */
        shapeActionStack(lowerDefinition, upperDefinition) {
            const key = "stack/" + lowerDefinition.getHash() + "/" + upperDefinition.getHash();
            if (this.operationCache[key]) {
                return /** @type {ShapeDefinition} */ (this.operationCache[key]);
            }

            this.root.signals.achievementCheck.dispatch(shapez.ACHIEVEMENTS.stackShape, null);

            const upperLayers = upperDefinition.getClonedLayers();
            for (let layer = 0; layer < upperLayers.length; ++layer) {  // Break all the crystals
                for (let quad = 0; quad < 4; ++quad) {
                    if (!upperLayers[layer][quad]) continue;
                    if (upperLayers[layer][quad].subShape == enumModShape.crystal) {
                        upperLayers[layer][quad] = null;
                    }
                }
            }

            const stackedLayers = lowerDefinition.layers.concat(upperLayers);
            return /** @type {ShapeDefinition} */ (this.operationCache[key] = this.registerOrReturnHandle(
                new shapez.ShapeDefinition({ layers: stackedLayers }).cloneFallDown().cloneClearOverheights()
            ));
        },
        /**
         * Generates a definition for splitting a shape definition in two halfs
         * @param {ShapeDefinition} definition
         * @returns {[ShapeDefinition, ShapeDefinition]}
         */
        shapeActionCutHalf(definition) {
            const key = "cut/" + definition.getHash();
            if (this.operationCache[key]) {
                return /** @type {[ShapeDefinition, ShapeDefinition]} */ (this.operationCache[key]);
            }
            const newDefinition = definition.cloneBreakMedium();

            const rightSide = newDefinition.cloneFilteredByQuadrants([2, 3]);
            const leftSide = newDefinition.cloneFilteredByQuadrants([0, 1]);

            this.root.signals.achievementCheck.dispatch(shapez.ACHIEVEMENTS.cutShape, null);

            return /** @type {[ShapeDefinition, ShapeDefinition]} */ (this.operationCache[key] = [
                this.registerOrReturnHandle(rightSide.cloneFallDown()),
                this.registerOrReturnHandle(leftSide.cloneFallDown()),
            ]);
        },
    }),
    MetaCutterBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
        getAvailableVariants(root) {
            return $super.getAvailableVariants(root);
        },
    }),
    MetaTrashBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
    }),
    MetaBalancerBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
        getAvailableVariants(root) {
            let available = [shapez.defaultBuildingVariant, shapez.enumBalancerVariants.merger, shapez.enumBalancerVariants.mergerInverse];
            if (root.hubGoals.isRewardUnlocked(shapez.enumHubGoalRewards.reward_splitter)) {
                available.push(shapez.enumBalancerVariants.splitter, shapez.enumBalancerVariants.splitterInverse);
            }
            return available;
        }
    }),
    MetaRotaterBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
        getAvailableVariants(root) {
            return [shapez.defaultBuildingVariant, shapez.enumRotaterVariants.ccw, shapez.enumRotaterVariants.rotate180];
        }
    }),
    MetaUndergroundBeltBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
    }),
    MetaPainterBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
    }),
    MetaMixerBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
    }),
    MetaStackerBuilding: ({ $super, $old }) => ({
        getIsUnlocked(root) {
            return true;
        },
    }),
    MetaMinerBuilding: ({ $super, $old }) => ({
        getAvailableVariants(root) {
            return [shapez.enumMinerVariants.chainable];
        }
    }),
    GameMode: ({ $super, $old }) => ({
        getBlueprintShapeKey() {
            return BLUEPRINT_SHAPE_KEY;
        },
        getUpgradedBlueprintShapeKeys() {
            const result = [];
            if (this.root.hubGoals.isRewardUnlocked(R.reward_storage)) {  // Unlocked Blueprint II
                result.push(BLUEPRINT_SHAPE_KEY_2);
            }
            if (this.root.hubGoals.isRewardUnlocked(R.reward_filter)) {  // Unlocked Blueprint III
                result.push(BLUEPRINT_SHAPE_KEY_3);
            }
            return result;
        },
        getUpgradedBlueprintShapeKeysValues() {
            const result = {};
            if (this.root.hubGoals.isRewardUnlocked(R.reward_storage)) {  // Unlocked Blueprint II
                result[BLUEPRINT_SHAPE_KEY_2] = 2;
            }
            if (this.root.hubGoals.isRewardUnlocked(R.reward_filter)) {  // Unlocked Blueprint III
                result[BLUEPRINT_SHAPE_KEY_3] = 4;
            }
            return result;
        },
    }),
    HUDConstantSignalEdit: ({ $super, $old }) => ({
        editConstantSignal(entity, { deleteOnCancel = true }) {
            if (!entity.components.ConstantSignal) {
                return;
            }

            // Ok, query, but also save the uid because it could get stale
            const uid = entity.uid;

            const signal = entity.components.ConstantSignal.signal;
            const signalValueInput = new shapez.FormElementInput({
                id: "signalValue",
                label: shapez.fillInLinkIntoTranslation(shapez.T.dialogs.editSignal.descShortKey, shapez.THIRDPARTY_URLS.shapeViewer),
                placeholder: "",
                defaultValue: signal ? signal.getAsCopyableKey() : "",
                validator: val => this.parseSignalCode(entity, val),
            });

            const items = [...Object.values(shapez.COLOR_ITEM_SINGLETONS)];

            if (entity.components.WiredPins) {
                items.unshift(shapez.BOOL_FALSE_SINGLETON, shapez.BOOL_TRUE_SINGLETON);
                items.push(
                    this.root.shapeDefinitionMgr.getShapeItemFromShortKey(
                        this.root.gameMode.getBlueprintShapeKey()
                    )
                );

                // Addition for upgraded blueprint shapes
                const blueprintShapeKeys = this.root.gameMode.getUpgradedBlueprintShapeKeys();
                items.push(...blueprintShapeKeys.map(key => this.root.shapeDefinitionMgr.getShapeItemFromShortKey(key)));
            } else {
                // producer which can produce virtually anything
                const shapes = ["CuCuCuCu", "RuRuRuRu", "WuWuWuWu", "SuSuSuSu"];
                items.unshift(
                    ...shapes.reverse().map(key => this.root.shapeDefinitionMgr.getShapeItemFromShortKey(key))
                );
            }

            if (this.root.gameMode.hasHub()) {
                items.push(
                    this.root.shapeDefinitionMgr.getShapeItemFromDefinition(
                        this.root.hubGoals.currentGoal.definition
                    )
                );
            }

            if (this.root.hud.parts.pinnedShapes) {
                items.push(
                    ...this.root.hud.parts.pinnedShapes.pinnedShapes.map(key =>
                        this.root.shapeDefinitionMgr.getShapeItemFromShortKey(key)
                    )
                );
            }

            const itemInput = new shapez.FormElementItemChooser({
                id: "signalItem",
                label: null,
                items,
            });

            const dialog = new shapez.DialogWithForm({
                app: this.root.app,
                title: shapez.T.dialogs.editConstantProducer.title,
                desc: shapez.T.dialogs.editSignal.descItems,
                formElements: [itemInput, signalValueInput],
                buttons: ["cancel:bad:escape", "ok:good:enter"],
                closeButton: false,
            });
            this.root.hud.parts.dialogs.internalShowDialog(dialog);

            // When confirmed, set the signal
            const closeHandler = () => {
                if (!this.root || !this.root.entityMgr) {
                    // Game got stopped
                    return;
                }

                const entityRef = this.root.entityMgr.findByUid(uid, false);
                if (!entityRef) {
                    // outdated
                    return;
                }

                const constantComp = entityRef.components.ConstantSignal;
                if (!constantComp) {
                    // no longer interesting
                    return;
                }

                if (itemInput.chosenItem) {
                    constantComp.signal = itemInput.chosenItem;
                } else {
                    constantComp.signal = this.parseSignalCode(entity, signalValueInput.getValue());
                }
            };

            dialog.buttonSignals.ok.add(() => {
                closeHandler();
            });
            dialog.valueChosen.add(() => {
                dialog.closeRequested.dispatch();
                closeHandler();
            });

            // When cancelled, destroy the entity again
            if (deleteOnCancel) {
                dialog.buttonSignals.cancel.add(() => {
                    if (!this.root || !this.root.entityMgr) {
                        // Game got stopped
                        return;
                    }

                    const entityRef = this.root.entityMgr.findByUid(uid, false);
                    if (!entityRef) {
                        // outdated
                        return;
                    }

                    const constantComp = entityRef.components.ConstantSignal;
                    if (!constantComp) {
                        // no longer interesting
                        return;
                    }

                    this.root.logic.tryDeleteBuilding(entityRef);
                });
            }
        }
    }),
    HubGoals: ({ $super, $old }) => ({
        /**
         * Handles the given definition, by either accounting it towards the
         * goal or otherwise granting some points
         * @param {ShapeDefinition} definition
         */
        handleDefinitionDelivered(definition) {
            const blueprintShapeKeysValues = this.root.gameMode.getUpgradedBlueprintShapeKeysValues();
            const hash = definition.getHash();
            if (hash in blueprintShapeKeysValues) {
                const bp = this.root.gameMode.getBlueprintShapeKey();
                this.storedShapes[bp] = (this.storedShapes[bp] || 0) + blueprintShapeKeysValues[hash];
                return;
            }
            $old.handleDefinitionDelivered.bind(this)(definition);
        },
        /**
         * Creates a random single-layered shape
         * @param {RandomNumberGenerator} rng
         * @returns {ShapeDefinition}
         */
        createSingleLayerShape(rng, level) {
            const colors = this.generateRandomColorSet(rng, level > 20);
            let pickedSymmetry = null; // pairs of quadrants that must be the same
            let availableShapes = [shapez.enumSubShape.rect, shapez.enumSubShape.circle, shapez.enumSubShape.star];
            if (rng.next() < 0.5) {
                pickedSymmetry = [
                    // radial symmetry
                    [0, 2],
                    [1, 3],
                ];
                availableShapes.push(shapez.enumSubShape.windmill); // windmill looks good only in radial symmetry
            } else {
                const symmetries = [
                    [
                        // horizontal axis
                        [0, 3],
                        [1, 2],
                    ],
                    [
                        // vertical axis
                        [0, 1],
                        [2, 3],
                    ],
                    [
                        // diagonal axis
                        [0, 2],
                        [1],
                        [3],
                    ],
                    [
                        // other diagonal axis
                        [1, 3],
                        [0],
                        [2],
                    ],
                ];
                pickedSymmetry = rng.choice(symmetries);
            }

            const randomColor = () => rng.choice(colors);
            const randomShape = () => rng.choice(availableShapes);

            const layer = [null, null, null, null];
            const killedGroup = (rng.next() < 0.5 ? -1 : rng.nextIntRange(0, pickedSymmetry.length));

            for (let j = 0; j < pickedSymmetry.length; ++j) {
                if (j == killedGroup) continue;
                const group = pickedSymmetry[j];
                const shape = randomShape();
                const color = randomColor();
                for (let k = 0; k < group.length; ++k) {
                    const quad = group[k];
                    layer[quad] = {
                        subShape: shape,
                        color,
                    };
                }
            }

            return new shapez.ShapeDefinition({ layers: [layer] });
        },
        /**
         * Creates a (seeded) random shape
         * @param {number} level
         * @returns {ShapeDefinition}
         */
        computeFreeplayShape(level) {
            const layerCount = Math.floor(shapez.clamp((level - 16 + 3) / 4, 1, 4));

            logger.log("Level =", level);
            logger.log("Layer Count =", layerCount);

            const canGenerateCrystals = true;
            const rng = new shapez.RandomNumberGenerator(this.root.map.seed + "/" + level);

            let definition = this.createSingleLayerShape(rng, level);
            if (canGenerateCrystals && rng.next() < 0.6) {
                definition = shapeActionCrystalGen(this.root, definition, rng.choice(this.generateRandomColorSet(rng, 0)));
            }
            while (definition.layers.length < layerCount) {
                let newLayerDefinition = this.createSingleLayerShape(rng, level);
                if (newLayerDefinition.layers.length < layerCount - 1 && rng.next() < 0.6) {
                    newLayerDefinition = shapeActionPinPush(this.root, newLayerDefinition);
                }
                definition = this.root.shapeDefinitionMgr.shapeActionStack(definition, newLayerDefinition);
                if (canGenerateCrystals && rng.next() < 0.6) {
                    definition = shapeActionCrystalGen(this.root, definition, rng.choice(this.generateRandomColorSet(rng, 0)));
                }
            }

            return this.root.shapeDefinitionMgr.registerOrReturnHandle(definition);
        }
    }),
};

const SIGNAL_FUNCTION = {
    gameLoadingStageEntered: (inGameState, stage) => {
        switch (stage) {
            case shapez.GAME_LOADING_STATES.s5_firstUpdate: {
                const root = inGameState.core.root;

                // 模拟交换机：处理逻辑注册
                const logicGateSystem = root.systemMgr.systems.logicGate;
                logicGateSystem.boundOperations[shapez.enumLogicGateType.shape_swapper] = compute_SHAPE_SWAPPER.bind(logicGateSystem);
                logicGateSystem.boundOperations[shapez.enumLogicGateType.pin_pusher] = compute_PIN_PUSHER.bind(logicGateSystem);
                logicGateSystem.boundOperations[shapez.enumLogicGateType.crystal_generator] = compute_CRYSTAL_GENERATOR.bind(logicGateSystem);
            }
        }
    },
    modifyUpgrades: (upgrades) => {
        Object.assign(upgrades, getUpgrades());
    },
    modifyLevelDefinitions: (levels) => {
        levels.length = 0;
        Object.assign(levels, getLevels());
    },
};  // end SIGNAL_FUNCTION

// end Extends & Signals

// start shapez2 features

function searchConnected(layers, startLayer, startQuad, crystalOnly = false) {
    assert(0 <= startLayer && startLayer < layers.length, "Invalid layer");
    assert(!crystalOnly || layers[startLayer][startQuad].subShape == enumModShape.crystal, "Crystal only");
    if (layers[startLayer][startQuad].subShape == enumModShape.pin) {
        return [[startLayer, startQuad]];
    }

    const queue = [], visited = {};
    let offset = 0;
    queue.push([startLayer, startQuad]); visited[[startLayer, startQuad]] = true;
    while (offset < queue.length) {
        const curLayer = queue[offset][0], curQuad = queue[offset][1];
        offset += 1;
        {
            const newLayer = curLayer, newQuad = (curQuad + 1) % 4;
            if ((!([newLayer, newQuad] in visited))
                && layers[newLayer][newQuad]
                && layers[newLayer][newQuad].subShape != enumModShape.pin
                && (!crystalOnly || layers[newLayer][newQuad].subShape == enumModShape.crystal)) {
                queue.push([newLayer, newQuad]); visited[[newLayer, newQuad]] = true;
            }
        }
        {
            const newLayer = curLayer, newQuad = (curQuad + 3) % 4;
            if ((!([newLayer, newQuad] in visited))
                && layers[newLayer][newQuad]
                && layers[newLayer][newQuad].subShape != enumModShape.pin
                && (!crystalOnly || layers[newLayer][newQuad].subShape == enumModShape.crystal)) {
                queue.push([newLayer, newQuad]); visited[[newLayer, newQuad]] = true;
            }
        }
        {
            const newLayer = curLayer + 1, newQuad = curQuad;
            if (newLayer < layers.length
                && (!([newLayer, newQuad] in visited))
                && layers[newLayer][newQuad]
                && layers[newLayer][newQuad].subShape != enumModShape.pin
                && layers[curLayer][curQuad].subShape == enumModShape.crystal
                && layers[newLayer][newQuad].subShape == enumModShape.crystal) {
                queue.push([newLayer, newQuad]); visited[[newLayer, newQuad]] = true;
            }
        }
        {
            const newLayer = curLayer - 1, newQuad = curQuad;
            if (newLayer >= 0
                && (!([newLayer, newQuad] in visited))
                && layers[newLayer][newQuad]
                && layers[newLayer][newQuad].subShape != enumModShape.pin
                && layers[curLayer][curQuad].subShape == enumModShape.crystal
                && layers[newLayer][newQuad].subShape == enumModShape.crystal) {
                queue.push([newLayer, newQuad]); visited[[newLayer, newQuad]] = true;
            }
        }
    }
    return queue;
}
function getAllConnected(layers) {
    const visited = {};
    const result = [];
    for (let layerIndex = 0; layerIndex < layers.length; ++layerIndex) {
        const layer = layers[layerIndex];
        for (let quadrant = 0; quadrant < layer.length; ++quadrant) {
            const item = layer[quadrant];
            if (!item || [layerIndex, quadrant] in visited) continue;
            const connectedList = searchConnected(layers, layerIndex, quadrant);
            result.push(connectedList);
            for (let i = 0; i < connectedList.length; ++i) {
                visited[[connectedList[i][0], connectedList[i][1]]] = true;
            }
        }
    }
    return result;
}
function getFallDownDistance(oldLayers, connectedList) {
    const layers = JSON.parse(JSON.stringify(oldLayers));
    let lowestLayer = 4;
    for (let i = 0; i < connectedList.length; ++i) {
        const pos = connectedList[i];
        layers[pos[0]][pos[1]] = null;
        lowestLayer = Math.min(lowestLayer, pos[0]);
    }
    for (let dis = 1; dis <= lowestLayer; ++dis) {
        let isEmpty = true;
        for (let i = 0; i < connectedList.length; ++i) {
            const pos = connectedList[i];
            if (layers[pos[0] - dis][pos[1]]) {
                isEmpty = false;
                break
            }
        }
        if (!isEmpty) return dis - 1;
    }
    return lowestLayer;
}
function breakCrystal(oldLayers, startLayer, startQuad) {
    const layers = JSON.parse(JSON.stringify(oldLayers));
    const connectedList = searchConnected(layers, startLayer, startQuad, true);
    for (let i = 0; i < connectedList.length; ++i) {
        const pos = connectedList[i];
        assert(layers[pos[0]][pos[1]].subShape == enumModShape.crystal, "The result of searchConnected contains non-crystal!");
        layers[pos[0]][pos[1]] = null;
    }
    return layers;
}

// end shapez2 features


function registerShapeSwapperProcessorType(modInterface) {
    shapez.MOD_ITEM_PROCESSOR_HANDLERS[shapeSwapperProcessorType] = process_SHAPE_SWAPPER;
    shapez.MOD_ITEM_PROCESSOR_SPEEDS[shapeSwapperProcessorType] =
        root => shapez.globalConfig.beltSpeedItemsPerSecond * root.hubGoals.upgradeImprovements.processors * (1 / 4);
}

function addShapeSwapperProcessRequirement(modInterface) { }

function registerPinPusherProcessorType(modInterface) {
    shapez.MOD_ITEM_PROCESSOR_HANDLERS[pinPusherProcessorType] = process_PIN_PUSHER;
    shapez.MOD_ITEM_PROCESSOR_SPEEDS[pinPusherProcessorType] =
        root => shapez.globalConfig.beltSpeedItemsPerSecond * root.hubGoals.upgradeImprovements.processors * (1 / 3);
}

function addPinPusherProcessRequirement(modInterface) { }

function registerCrystalGeneratorProcessorType(modInterface) {
    shapez.MOD_ITEM_PROCESSOR_HANDLERS[crystalGeneratorProcessorType] = process_CRYSTAL_GENERATOR;
    shapez.MOD_ITEM_PROCESSOR_SPEEDS[crystalGeneratorProcessorType] =
        root => shapez.globalConfig.beltSpeedItemsPerSecond * root.hubGoals.upgradeImprovements.painting * (1 / 6);
}

function addCrystalGeneratorProcessRequirement(modInterface) { }


function shapeActionPinPush(root, definition) {
    if (definition.isEntirelyEmpty()) {
        assert(false, "Can not push entirely empty definition");
    }
    const definitionMgr = root.shapeDefinitionMgr;
    const key = "pinpush/" + definition.getHash();
    if (definitionMgr.operationCache[key]) {
        return /** @type {ShapeDefinition} */ (definitionMgr.operationCache[key]);
    }

    const bottomLayer = definition.layers[0];
    const pinQuads = [null, null, null, null];
    for (let quad = 0; quad < 4; ++quad) {
        if (bottomLayer[quad] !== null) {
            pinQuads[quad] = {
                subShape: enumModShape.pin,
                color: undefined
            }
        }
    }
    let newLayers = [pinQuads].concat(definition.layers);
    return /** @type {ShapeDefinition} */ (definitionMgr.operationCache[key] = definitionMgr.registerOrReturnHandle(
        new shapez.ShapeDefinition({ layers: newLayers }).cloneClearOverheights()
    ));
}

function shapeActionSwap(root, definition1, definition2) {
    const definitionMgr = root.shapeDefinitionMgr;
    const key = "swap/" + definition1.getHash() + "/" + definition2.getHash();
    if (definitionMgr.operationCache[key]) {
        return /** @type {[ShapeDefinition, ShapeDefinition]} */ (definitionMgr.operationCache[key]);
    }

    let firstShape;
    let secondShape;

    const newDefinition1 = definition1.cloneBreakMedium();
    const newDefinition2 = definition2.cloneBreakMedium();

    const l1 = newDefinition1.cloneFilteredByQuadrants([2, 3]).cloneFallDown();
    const l2 = newDefinition2.cloneFilteredByQuadrants([2, 3]).cloneFallDown();
    const r1 = newDefinition1.cloneFilteredByQuadrants([0, 1]).cloneFallDown();
    const r2 = newDefinition2.cloneFilteredByQuadrants([0, 1]).cloneFallDown();

    if (l1.isEntirelyEmpty()) {
        firstShape = r2;
    } else if (r2.isEntirelyEmpty()) {
        firstShape = l1;
    } else {
        firstShape = l1.cloneAndStackWith(r2);
    }
    if (r1.isEntirelyEmpty()) {
        secondShape = l2;
    } else if (l2.isEntirelyEmpty()) {
        secondShape = r1;
    } else {
        secondShape = r1.cloneAndStackWith(l2);
    }

    return /** @type {[ShapeDefinition, ShapeDefinition]} */ (definitionMgr.operationCache[key] = [
        definitionMgr.registerOrReturnHandle(firstShape),
        definitionMgr.registerOrReturnHandle(secondShape),
    ]);
}

function shapeActionCrystalGen(root, definition, color) {
    if (definition.isEntirelyEmpty()) {
        assert(false, "Can not process entirely empty definition");
    }
    const definitionMgr = root.shapeDefinitionMgr;
    const key = "crystal_gen/" + definition.getHash() + "/" + color;
    if (definitionMgr.operationCache[key]) {
        return /** @type {ShapeDefinition} */ (definitionMgr.operationCache[key]);
    }

    const newLayers = definition.getClonedLayers();
    for (let layerIndex = 0; layerIndex < definition.layers.length; ++layerIndex) {
        const quadrants = newLayers[layerIndex];
        for (let quadrantIndex = 0; quadrantIndex < 4; ++quadrantIndex) {
            if (!quadrants[quadrantIndex] || quadrants[quadrantIndex].subShape == enumModShape.pin) {
                quadrants[quadrantIndex] = {
                    subShape: enumModShape.crystal,
                    color
                }
            }
        }
    }

    return /** @type {ShapeDefinition} */ (definitionMgr.operationCache[key] = definitionMgr.registerOrReturnHandle(
        new shapez.ShapeDefinition({ layers: newLayers })
    ));
}

function shapeActionFallDown(root, definition) {
    const definitionMgr = root.shapeDefinitionMgr;
    const key = "falldown/" + definition.getHash();
    if (definitionMgr.operationCache[key]) {
        return /** @type {ShapeDefinition} */ (definitionMgr.operationCache[key]);
    }

    return /** @type {ShapeDefinition} */ (definitionMgr.operationCache[key] = definitionMgr.registerOrReturnHandle(
        definition.cloneFallDown()
    ));
}


function process_PIN_PUSHER(payload) {
    const item = /** @type {ShapeItem} */ (payload.items.get(0));
    assert(item instanceof shapez.ShapeItem, "Input for pin pusher is not a shape");

    const definition = shapeActionPinPush(this.root, item.definition);

    payload.outItems.push({
        item: this.root.shapeDefinitionMgr.getShapeItemFromDefinition(definition),
    });
}

function process_SHAPE_SWAPPER(payload) {
    const item1 = /** @type {ShapeItem} */ (payload.items.get(0));
    const item2 = /** @type {ShapeItem} */ (payload.items.get(1));
    assert(item1 instanceof shapez.ShapeItem, "Input for item 1 is not a shape");
    assert(item2 instanceof shapez.ShapeItem, "Input for item 2 is not a shape");

    const newDefinition = shapeActionSwap(this.root, item1.definition, item2.definition);

    const ejectorComp = payload.entity.components.ItemEjector;
    for (let i = 0; i < 2; ++i) {
        const definition = newDefinition[i];

        if (definition.isEntirelyEmpty()) {
            ejectorComp.slots[i].lastItem = null;
            continue;
        }

        payload.outItems.push({
            item: this.root.shapeDefinitionMgr.getShapeItemFromDefinition(definition),
            requiredSlot: i,
        });
    }
}

function process_CRYSTAL_GENERATOR(payload) {
    const shapeItem = /** @type {ShapeItem} */ (payload.items.get(0));
    const colorItem = /** @type {ColorItem} */ (payload.items.get(1));
    assert(shapeItem instanceof shapez.ShapeItem, "Input for shape item is not a shape");
    assert(colorItem instanceof shapez.ColorItem, "Input for color item is not a color");

    const definition = shapeActionCrystalGen(this.root, shapeItem.definition, colorItem.color);

    payload.outItems.push({
        item: this.root.shapeDefinitionMgr.getShapeItemFromDefinition(definition),
    });
}


function compute_PIN_PUSHER(parameters) {
    const item = parameters[0];
    if (!item) return [null];
    if (item.getItemType() !== "shape") return [null];
    const definition = /** @type {ShapeItem} */ (item).definition;
    const result = shapeActionPinPush(this.root, definition);
    return [
        result.isEntirelyEmpty()
            ? null
            : this.root.shapeDefinitionMgr.getShapeItemFromDefinition(result),
    ];
}

function compute_SHAPE_SWAPPER(parameters) {
    const leftItem = parameters[0], rightItem = parameters[1];
    if (!leftItem || !rightItem) return [null, null];
    if (leftItem.getItemType() !== "shape" || rightItem.getItemType() !== "shape") return [null, null];
    const definition1 = /** @type {ShapeItem} */ (leftItem).definition;
    const definition2 = /** @type {ShapeItem} */ (rightItem).definition;
    const result = shapeActionSwap(this.root, definition1, definition2);
    return [
        result[0].isEntirelyEmpty()
            ? null
            : this.root.shapeDefinitionMgr.getShapeItemFromDefinition(result[0]),
        result[1].isEntirelyEmpty()
            ? null
            : this.root.shapeDefinitionMgr.getShapeItemFromDefinition(result[1]),
    ];
}

function compute_CRYSTAL_GENERATOR(parameters) {
    const leftItem = parameters[0], rightItem = parameters[1];
    if (!leftItem || !rightItem) return [null, null];
    if (leftItem.getItemType() !== "shape" || rightItem.getItemType() !== "color") return [null, null];
    const definition = /** @type {ShapeItem} */ (leftItem).definition;
    const color = /** @type {ColorItem} */ (rightItem).color;
    const result = shapeActionCrystalGen(this.root, definition, color);
    return [
        result.isEntirelyEmpty()
            ? null
            : this.root.shapeDefinitionMgr.getShapeItemFromDefinition(result),
    ];
}



////////////////////////////////////////////////////////////////////////

