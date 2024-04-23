import { _decorator, assetManager, Component, instantiate, Node, Prefab, resources, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("customScript")
export class customScript extends Component {
    @property({ type: Sprite })
    img: Sprite = null;
    start() {
        // resources.preload("prefabs/nodePrefab", Prefab);
        let remoteUrl =
            "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/luffy-is-grinning-in-the-movie.jpg";
        assetManager.loadRemote(remoteUrl, function (err, img) {
            console.log("Image", img);
            console.log("Error", err);
            this.img.spriteFrame = img;
        });
    }

    update(deltaTime: number) {}
    onClick() {
        const before = Date.now();
        for (let i = 0; i < 4; i++) {
            resources.load("prefabs/nodePrefab", Prefab, null, (err, prefab) => {
                console.log(typeof prefab);
                console.log(prefab);
                const newNode = instantiate(prefab);
                this.node.getParent().addChild(newNode);
            });
        }
        const after = Date.now();
        console.log(after - before);
    }

    // onClick() {
    //     resources.load("person/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
    //         console.log("frame: ", spriteFrame);
    //         console.log(err);
    //         // this.node.getComponent(Sprite).spriteFrame = spriteFrame;
    //         this.person.spriteFrame = spriteFrame;
    //     });
    // }
}
