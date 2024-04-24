import {
    _decorator,
    AssetManager,
    assetManager,
    Component,
    director,
    instantiate,
    Node,
    Prefab,
    sp,
    Sprite,
    SpriteFrame,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("bundleScript")
export class bundleScript extends Component {
    @property({ type: Sprite })
    img: Sprite = null;
    bundle: AssetManager.Bundle;
    onLoad() {
        assetManager.loadBundle("bundle1", (err, bundle) => {
            if (err) {
                return console.log(err);
            }
            this.bundle = bundle;
            // console.log("bundle: ", this.bundle);
        });
    }
    start() {}

    update(deltaTime: number) {}

    onClick() {
        // this.bundle.loadDir("prefabs", (err, prefab) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     console.log(typeof prefab);
        //     console.log(prefab.entries());
        // });
        console.log("before childrens: ", director.getScene().children);

        this.bundle.load("resources/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
            // console.log("spriteFrame", spriteFrame);
            if (err) {
                console.error(err);
                return;
            }
            this.img.spriteFrame = spriteFrame;
        });

        this.bundle.load("prefabs/nodePrefab", Prefab, null, (err, prefab) => {
            if (err) {
                console.error(err);
                return;
            }
            let newNode = instantiate(prefab);
            console.log("new Node: ", newNode);
            this.node.addChild(newNode);

            console.log("after childrens: ", director.getScene().children);
        });
    }
}
