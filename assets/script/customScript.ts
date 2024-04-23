import { _decorator, Component, instantiate, Node, Prefab, resources, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("customScript")
export class customScript extends Component {
    // @property({ type: Sprite })
    // person: Sprite = null;
    start() {
        for (let i = 0; i < 5; i++) {
            resources.load("prefabs/nodePrefab", Prefab, null, (err, prefab) => {
                console.log(typeof prefab);
                console.log(prefab);
                const newNode = instantiate(prefab);
                this.node.addChild(newNode);
            });
        }
    }

    update(deltaTime: number) {}

    // onClick() {
    //     resources.load("person/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
    //         console.log("frame: ", spriteFrame);
    //         console.log(err);
    //         // this.node.getComponent(Sprite).spriteFrame = spriteFrame;
    //         this.person.spriteFrame = spriteFrame;
    //     });
    // }
}
