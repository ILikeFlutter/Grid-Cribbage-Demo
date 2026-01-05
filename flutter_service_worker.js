'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "96a40830269c54dcff7ffa1271c00181",
".git/config": "68583ef4375ac9ae426ceb444f5803f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "46a308a44f05059a426c49c7ae1384e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9acc76324170e513143fc9204ee7df82",
".git/logs/refs/heads/main": "fba8d6d54ae14ef5e8d86787f2ab879e",
".git/logs/refs/remotes/origin/main": "9f13c143934231a2b0754a6df444b57e",
".git/objects/02/5a072cc85c167e0740d172c5813de5a5d35159": "9153b192d16fa7b32ffc0e9d622373a8",
".git/objects/03/cb5ab5c9d309c028c8a3b68dfd94decb1ed691": "26e31ab475b1645ba57e429f37e2daa6",
".git/objects/04/39af0061c112a2964027f73dba217240d3517c": "b6b3b619d9e1803dfd77393791f93e75",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0f/d685b7cb07bae24d28fa221961383649af18fc": "982a4f6eb481577a89dad126065ff173",
".git/objects/15/20d137e7dd544928a05e85b092bae54451fb23": "66f93e15b87c5936b410c75f1b0c6f30",
".git/objects/1b/e3245a0752db75ce2ec6a71f9e40a2a589b90f": "d550e7e577f74df0a5e9df59781a9932",
".git/objects/1c/939e8bb713872c69a50759bbc33fe030eed091": "459793a7f52b9a7e138f9bdfc9d2126c",
".git/objects/1d/eaa68d79f928c25e4d420815ce7b44439ec267": "837cac88310ec0dbd9280ab43c1e4f76",
".git/objects/1e/05f3eba47104cd3efee6d38215bfa40a97108a": "6619e2eb2ef8139505db274bb9f24e31",
".git/objects/1e/9d4bb1e2348eb2e7368cdf84db85bf84b2b66c": "ba923ee18feec57523caa23d1a8d7e30",
".git/objects/1e/b6d7f0f3db6b96583d353c2bf81f1efd5fe03d": "c7f4d0e59afd954be52fa484eb5aebba",
".git/objects/21/ab990f882ddd02168a7ec5b8e7f0867d641dfa": "d1d67ab99119e604a3011b79ce1842b1",
".git/objects/29/bf0cfdea36b491ad830ff3142bc175401453f2": "7cedb8c92a80769fa028fb71a455ed94",
".git/objects/2a/96e3eeb08787c9c93404db40c6b35ffe954baf": "4cc715bdc98458d6ab5cf67984d3b4be",
".git/objects/2f/73cd17664305850b00ebba35dca5cc6925b6e8": "5ff044a9517d7f1ec00ba692f19ac5d4",
".git/objects/33/36ee37a866f372bd3eae1ef423842578f3686b": "70b215bb631880c2db174e5d811cc9c4",
".git/objects/33/ad5c0db4db47d514dd3a098a54bfa4c130facd": "3df999f6d9c01ff2bfbc132a0c51ad40",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/6a015188cb421df9a1a0695ea1031b03ed2915": "e7065a245bb96d3d47fc1820a8e55d58",
".git/objects/42/84da2017aeffd559fd8366ca04450f06e4f8be": "c8888fb90bef5880929eb97cb8d862fe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9a454b038e2aec6f89816aa201bf0d3a098555": "17578ee8cb67f0d0c328c792ddbf61ad",
".git/objects/46/bac4f14099517110591f0ee1db61534500cda9": "b04a9ce0ee69a41ccb32244dab3777da",
".git/objects/49/6c66434314b55d118c58ff786f4205feb43a2c": "e47c2a481b5c52e3741d62ac04441884",
".git/objects/4b/bd0d82dee13caf37c1722c7a515c9f7819f8b2": "e4dddc6b8a0f85022bbf86cb10243075",
".git/objects/4c/ddc47962298b75064de6edc1986e53dab0837c": "dbfaf7f41e966080f767ffa32fd9820a",
".git/objects/50/148215e272b1b60f75de4be0f3abb2e66593ed": "6e3e664e80b3789a359a2b3625f46f01",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/32ecd352c131610381e70458c7f4d46ec6c4bd": "84c5b540714693dfd03917380a1ef47e",
".git/objects/53/314e5a4aadca11794791a9b48f9ff523c23838": "28751333882df234f907379ca78bf3fa",
".git/objects/5d/ea92d2747764bc5409cb4f8180969351417815": "883e859a0bc844a6cb5167b720ad7e0a",
".git/objects/62/e6bcc147d41f509a58d4be672e14f2ce2b55b3": "e5737db7a6deec65b52785182db5e92b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/fc62424efb3445bb56ba9248eb3db9bf8938c5": "5c4dbcd882fb303d433290a6a76a7fd8",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/76/6197d1600138f31df18bebfb1ddb4c1c8c26b1": "f93802439ce1f32564458734c9e29bc0",
".git/objects/76/a14cb1302acf34a2306273a03091edc9e045fa": "64433ed763e07f4bde1f2408788c30a2",
".git/objects/79/8553bb6246cbeaa3f88773a5fd6a577f1217e7": "2b015573123e139bf49529e58715cb66",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/75b742229568a73cf5d2f16b58cc1f3de85742": "b0bd7d8981435b02962e6823f69716ff",
".git/objects/7e/a113bec10af5f9b863fd7ee86950539d49b4de": "75cffd6e024ba340df9c329dc37c085a",
".git/objects/7e/b5b3e525508b71e811271d50d70163c35970b9": "41b9abbabe1590bcfd5ce20e51c02af8",
".git/objects/7f/18c9bd9a8b1271c9114ce5ef51237cbbbb023a": "0e1ef97de253e1c76275064f08ce14f3",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/67d7378e0d6285215e285b42ba1266b74fcbc1": "c5676aebbf3962149abb454ec667a02b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e0dd42d072b4f62b373b268574be50fc57ace0": "6986b74f4b1e66dc1314742eff9ff71d",
".git/objects/8a/88accd64ea3bd835c37a6363b5c78b13cacc7a": "bc7bf2553fd78cd5e16873bec4410c85",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b4af373574520ff57ab12deac99e6ee506ee08": "76f26e10e09093ae5433019b2ca6dc4e",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/91/d9313c9162fe15090531b56aa44fd4e2498931": "c50012c2749558b1cd4bb32975d312e9",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/6de83aee788909f78154518463c6aabdac556a": "197b5f12bf7cc561dec0703ce45f8075",
".git/objects/98/7f230814dfe3e7f5cd0febdab84caab2b7ce4e": "25022f83cfa4a434334db1b33bd402c3",
".git/objects/98/a70bd3f78227e60e278c77162b730183388a67": "375af1554aeee01abe1fda81ebc2343b",
".git/objects/99/a36d7c6708ada678072c1e6150eaf71d9d01a0": "dd9331c95ddb4ecfb2ed75e607e2583f",
".git/objects/9c/5fe8519bddd8aa0b85276ecd7c9a91d404dcd3": "1849dd60f672bab1de58892d4803884f",
".git/objects/a1/a234d9a84b89a3358eae1a81f74959b7ed2e77": "fe34a6287fab94a5270f5c3ca4ea6af2",
".git/objects/a6/6484de479c300a525ce952681bc8b19d804f0a": "d675219028a2be25ddb3265f34d12f4c",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/8666a49de2a4bf7bc0225e91e972979cd130a0": "6ca634dbfda22811d0437bb1462a706a",
".git/objects/ab/df7e43d21754447498745f25f5dc56b6ced41a": "3b01f5b4e666676e0e333da2ffbe6f3e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/8c17517eb3bf681b431bb77eb9467a4db7ffe0": "824cbe2c680184fe0089f869205c3283",
".git/objects/b2/a70fe7e11373209df6b820cbed00ae5f04a537": "bc7234d5381af81bd10a4f73a265fdd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/b5aef184c30458d37aee9f464242466ac78c10": "51333b7aafc36fad9eff62ee04670483",
".git/objects/bf/4a615751128cb94d9b0675e6df5d3313f4d2de": "c6b86e709f35eb8f45181ee606dd93a3",
".git/objects/c0/4a07b042d675eddf0ebe5155980ec6d50b0f50": "bc77666981c54f830b9dc34826f8b158",
".git/objects/c0/6010b3b3b65de6442bac9d75253c3f889c466c": "c6e0f490639cfef0b9ea1b3785e134e2",
".git/objects/c3/0e47a664b19d4532baf70bb39b8b986ee3c21b": "d72f14e89bfa82b96fc7cb54feeabc74",
".git/objects/c5/9e2f6bc7166f9c367ceb1c755a5785c9268b36": "038f5018cbda403d5ef2fbc13e60a074",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/f42f61ac43cba9e10ef49e1d88c7c3d709aefb": "b60ce90b5f3837be61aeb359d0ddbe68",
".git/objects/c9/103117f331747054fed4cf5756a9f8a177f47a": "1082dd21670250bde338ba99a12ce18e",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/cc/c69877876e3ae2ac475d49bed2bcd07d4a31f0": "ae0773c1eb4b21fe5eaa70562beb529c",
".git/objects/d0/4aef67673733bac374dcbc6e674013ec88c89e": "8772957649799599da9aee0ba3528871",
".git/objects/d3/c13bd196d6d7cf93337255317f8f8c7ad75aa9": "5bbd8d67387b598e1f222d7e035a61d6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4b5e6069c5e22ceed548e803fab46e45ebd054": "dda9f2c67c63163e055fae70f57c81c9",
".git/objects/d4/b2501f409ea1021f180556aaeec1021185503d": "49b35b853a73f04a8f0cde297f473ac6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/d3f90ba6ea1fd7e56cec4cffdefefef385e9e1": "6625749404316acc2f0975968fad20df",
".git/objects/de/71f0ef32e69bf7e74beb99396bc553bbce8e53": "5245f4668e0f8c8820034faf5bdbf8b7",
".git/objects/e3/7981bd93ab0993ec930d5c920dfeebf5bbdbd8": "7b3418736bbbaaf6694b503d76217ac9",
".git/objects/e8/eb39b7ebe5cb8a666bc2d03946d37bd6cb4b68": "827270ea3582a5a9a813d4939150977d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8265eff0f8c872772dd228cdf55d266dde1d13": "48ca8494ad00193b88713ed73d1d9e58",
".git/objects/f0/9890dd7c81cfd7271033550e2a689ddc12e695": "0dd1e7641712aa3c25e32d258f392a75",
".git/objects/f0/db0677b1d9f83c3eb6874364ac9c5e963e56ee": "5acd621391bed876c78ac145335f2df5",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/e94eca8153a8bd76cfc398b7dd0fd314090a44": "a5073985287cf2e2c6b512d201539593",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/8d961e5d42b449449a2e5e4f1107f04b62fff2": "74eb63bdaa832a047fec26b00a8abb95",
".git/objects/fa/65d142b22abc3e3e9ac99e804fb84ad0741435": "3ae9d5ce2c6e8e260d8b606513bf8334",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "19c932122ad6e5bcb0894ee9a7ed59cb",
".git/refs/remotes/origin/main": "19c932122ad6e5bcb0894ee9a7ed59cb",
"assets/AssetManifest.bin": "7ac79f09af267cf169a359a60702c09a",
"assets/AssetManifest.bin.json": "bb2222155240a08657ff79530ad72c33",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/NOTICES": "25fe7388782618e47ec729764ff7f79e",
"assets/packages/card_game/assets/10_of_clubs.svg": "de119dfd6101052ec09a19ce36b5d884",
"assets/packages/card_game/assets/10_of_diamonds.svg": "d2570c3dbc44b3ea9328c3b0373c8da6",
"assets/packages/card_game/assets/10_of_hearts.svg": "f949327834dd2e52ba45699415fd7dd8",
"assets/packages/card_game/assets/10_of_spades.svg": "d5d5cde9cd5dc1920bb2c367a65520ac",
"assets/packages/card_game/assets/2_of_clubs.svg": "ab031abeae51aaff7c62fdc6d2f77397",
"assets/packages/card_game/assets/2_of_diamonds.svg": "a72a9b4eaa823f0e79bdf20defe1f37e",
"assets/packages/card_game/assets/2_of_hearts.svg": "86a8388d8484baaaa774330645ae8df2",
"assets/packages/card_game/assets/2_of_spades.svg": "60c1a2af891bea23194f6adf07ba18e4",
"assets/packages/card_game/assets/3_of_clubs.svg": "3637a924d1f479f0aa810968940a4b27",
"assets/packages/card_game/assets/3_of_diamonds.svg": "e8f1caabebdd3d7193fec4a5218ccfa7",
"assets/packages/card_game/assets/3_of_hearts.svg": "a0abbdfa08ed7b83f24ff1e8f7aa6f16",
"assets/packages/card_game/assets/3_of_spades.svg": "295e6cd4ed7d3b49e5745472a5ce32d2",
"assets/packages/card_game/assets/4_of_clubs.svg": "776f1f5a36c8bd28bb991e1f0a91824c",
"assets/packages/card_game/assets/4_of_diamonds.svg": "89979f5298a5116afc9c2a0bb2f67b9a",
"assets/packages/card_game/assets/4_of_hearts.svg": "9d3f9a3759820826f966ccf9b8d52220",
"assets/packages/card_game/assets/4_of_spades.svg": "c61fab0088def64a53768f888147091b",
"assets/packages/card_game/assets/5_of_clubs.svg": "9794d7a77bde4b091e40d3a0d42f406b",
"assets/packages/card_game/assets/5_of_diamonds.svg": "918773e60cafb95b627af0f86d4b9de8",
"assets/packages/card_game/assets/5_of_hearts.svg": "9c260cf6d8980d3476ad150a6ae21855",
"assets/packages/card_game/assets/5_of_spades.svg": "aaf3566d41f2441c594a9a0af7f4fa34",
"assets/packages/card_game/assets/6_of_clubs.svg": "ee4d61d1c1b6dcc23537f3920bf4a5ec",
"assets/packages/card_game/assets/6_of_diamonds.svg": "5a578b72e98989ec7b7a73270880b8df",
"assets/packages/card_game/assets/6_of_hearts.svg": "2e03d778ac1aae8c90b8942e82edf2ae",
"assets/packages/card_game/assets/6_of_spades.svg": "495971b41fd48624749cdb260a27fab6",
"assets/packages/card_game/assets/7_of_clubs.svg": "aee3dfcbad42472bb09c84c33e78ef86",
"assets/packages/card_game/assets/7_of_diamonds.svg": "02eeefe10db6f3a5adbb83532b611cad",
"assets/packages/card_game/assets/7_of_hearts.svg": "d705fb76597e64be2589eab421ac36b4",
"assets/packages/card_game/assets/7_of_spades.svg": "10bdb4a7db398414cbc8004fed7f489e",
"assets/packages/card_game/assets/8_of_clubs.svg": "d8658aaff92f5efbec4fbbc87b4c6c06",
"assets/packages/card_game/assets/8_of_diamonds.svg": "e9f5bb5e8b92f5ccbe68a8610c4fea12",
"assets/packages/card_game/assets/8_of_hearts.svg": "f45fcff958d446725bf64faa453cc8ee",
"assets/packages/card_game/assets/8_of_spades.svg": "e3c78ddddcde9ea523c9f56c1d1d3aa6",
"assets/packages/card_game/assets/9_of_clubs.svg": "c77364f5efc5e3c72195de67ef6b0b00",
"assets/packages/card_game/assets/9_of_diamonds.svg": "b292640ac281f47a09149b502fcf3312",
"assets/packages/card_game/assets/9_of_hearts.svg": "130d9ca1f2b69591f53651909f182ec6",
"assets/packages/card_game/assets/9_of_spades.svg": "084512675ea0c48e010c4470dda096a3",
"assets/packages/card_game/assets/ace_of_clubs.svg": "d054a8b0823c069436560284e86470fa",
"assets/packages/card_game/assets/ace_of_diamonds.svg": "afb53b15f15ee7f673d28ba9c70ff8b6",
"assets/packages/card_game/assets/ace_of_hearts.svg": "b57d61417475572202e04d6e7d56d60d",
"assets/packages/card_game/assets/ace_of_spades.svg": "650157ddf174f8defdf7578094280d64",
"assets/packages/card_game/assets/jack_of_clubs.svg": "42f124e0508a3913959196f97695ca91",
"assets/packages/card_game/assets/jack_of_diamonds.svg": "4db22fffcc663aa621e64b730384453f",
"assets/packages/card_game/assets/jack_of_hearts.svg": "0891dbac086b00106b5c250f2c1f7e56",
"assets/packages/card_game/assets/jack_of_spades.svg": "4da5c20b3039348b8aa5f55f6c45511c",
"assets/packages/card_game/assets/king_of_clubs.svg": "94fce4e70cf9344e8393257fd5cc886b",
"assets/packages/card_game/assets/king_of_diamonds.svg": "4042641be3fc00d60e0a3d20dcb7a9d1",
"assets/packages/card_game/assets/king_of_hearts.svg": "3b6cd425e7361eb6f1b578da68d9f294",
"assets/packages/card_game/assets/king_of_spades.svg": "ce085f880de86dab1e1244ff0b4e7909",
"assets/packages/card_game/assets/queen_of_clubs.svg": "ad3bbf70d225fee8121c458397d4cb11",
"assets/packages/card_game/assets/queen_of_diamonds.svg": "a487b5d7cec45be284def73bbb90a7a1",
"assets/packages/card_game/assets/queen_of_hearts.svg": "b3c950fc2ad388187922e3fb704e6465",
"assets/packages/card_game/assets/queen_of_spades.svg": "6bb55d42e8ebb69d864edad217e76010",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "627ee40a7270ded54f164309c0b92b44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b34e911d42f3081a2f204bb512993e0",
"/": "2b34e911d42f3081a2f204bb512993e0",
"main.dart.js": "3511f41a3f81fcbb13b7fa5d0e267a82",
"manifest.json": "2584a6bbbc29262e8b95b9103b19f2b7",
"version.json": "db0ef17395c16d393668ae535f8ade02"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
