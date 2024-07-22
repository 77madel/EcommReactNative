const API_URL = "http://localhost:8001/api/produits"; // Assurez-vous que le serveur backend est accessible

class ProduitService {
    async getProduits() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des produits');
        }
        return response.json();
    }
}

export default new ProduitService();



// export const  FakeProduit =[
//     {
//         id: "16056183-3055-4550-98b1-6bdc793b86b5",
//         nom_produit: "Dell",
//         description: "test jhkjhjkwnejkkjweh",
//         prix: 80,
//         image: "../assets/desktop.png"
//     },
//     {
//         id: "db3fab8e-7826-4c7a-af90-7e564fb4981a",
//         nom_produit: "proident",
//         description: "mollit incididunt incididunt mollit consectetur officia labore eiusmod incididunt enim et eiusmod sit enim eiusmod",
//         prix: 134
//     },
//     {
//         id: "5285614c-cf33-48dd-976e-615d921223a1",
//         nom_produit: "laborum est cillum ex",
//         description: "dolore consectetur mollit deserunt ex proident quis ad velit dolor nisi ut",
//         prix: 132
//     },
//     {
//         id: "7d41bc60-7301-42e1-9a11-f7b7086de733",
//         nom_produit: "cupidatat magna non deserunt voluptate",
//         description: "ad ullamco veniam cupidatat proident ad",
//         prix: 118
//     },
//     {
//         id: "79bc8827-8970-48f1-962b-445575588f01",
//         nom_produit: "ipsum ea ea cupidatat officia duis minim do",
//         description: "ullamco enim dolore quis in laboris dolor esse amet veniam culpa laboris fugiat ex do velit amet elit",
//         prix: 27
//     },
//     {
//         id: "9d8a5be0-d500-4b94-8744-62eb89704133",
//         nom_produit: "ad elit aliqua consequat do culpa enim",
//         description: "qui enim minim velit sit excepteur nulla veniam sunt Lorem labore",
//         prix: 50
//     },
//     {
//         id: "e3128431-61fd-4273-a974-d8d6902ede6b",
//         nom_produit: "proident nulla esse labore",
//         description: "Lorem aliquip cillum magna dolor irure cupidatat",
//         prix: 33
//     },
//     {
//         id: "90588f12-c0d8-478a-8a51-7d68b8b6fc88",
//         nom_produit: "eu eu ad veniam Lorem est incididunt tempor non qui",
//         description: "magna velit consectetur",
//         prix: 59
//     },
//     {
//         id: "0a3e6700-f64c-4b6e-ab57-6975489f5bcf",
//         nom_produit: "voluptate nulla et anim consectetur dolor laboris esse et laborum",
//         description: "mollit cupidatat sint",
//         prix: 133
//     },
//     {
//         id: "f7af7b94-2789-40c3-a609-849df281ffcb",
//         nom_produit: "irure excepteur nulla commodo sit qui",
//         description: "minim nulla ullamco mollit et pariatur aliquip id ea quis irure ad deserunt quis est laborum cupidatat et occaecat officia qui eiusmod consequat enim duis",
//         prix: 64
//     },
//     {
//         id: "dea70a47-4691-4665-b143-23151ae4ef86",
//         nom_produit: "sint voluptate fugiat nostrud minim est incididunt id",
//         description: "reprehenderit amet est irure duis exercitation do veniam id dolore do ea irure ad nisi commodo non excepteur qui",
//         prix: 92
//     },
//     {
//         id: "09ca90b0-8a90-4f40-aeb2-05664f0e2994",
//         nom_produit: "nisi fugiat aliqua ex",
//         description: "officia do consequat excepteur Lorem ea dolore commodo anim adipisicing eiusmod ullamco aute aliquip sunt et commodo tempor ea in velit irure cupidatat pariatur Lorem qui minim aliqua eu et",
//         prix: 126
//     },
//     {
//         id: "77e0db84-880d-478a-9673-686ccfe12369",
//         nom_produit: "ad nostrud enim qui nostrud ex commodo",
//         description: "do consectetur nulla ea",
//         prix: 80
//     },
//     {
//         id: "ed23d3ec-2733-46d3-bc86-4a9df2761007",
//         nom_produit: "aliquip",
//         description: "ullamco veniam commodo culpa consectetur tempor consequat culpa",
//         prix: 129
//     },
//     {
//         id: "00cb872f-f373-4f54-93b8-14f5bb1dd466",
//         nom_produit: "amet id sint commodo",
//         description: "amet fugiat eiusmod",
//         prix: 46
//     },
//     {
//         id: "b1710a97-76b9-4e94-a8a5-c8ef84e7f38f",
//         nom_produit: "occaecat",
//         description: "",
//         prix: 70
//     },
//     {
//         id: "8beb58e9-4461-405b-bb88-9daa57c4575d",
//         nom_produit: "sunt culpa esse reprehenderit laborum ut qui",
//         description: "aliqua excepteur ex exercitation occaecat exercitation ullamco voluptate ex aliqua exercitation excepteur consequat ullamco ullamco irure aliquip nulla ipsum quis est sit",
//         prix: 100
//     },
//     {
//         id: "5033cd6a-f56a-4f43-af07-0de812ea3441",
//         nom_produit: "minim velit eiusmod duis nisi veniam",
//         description: "labore ea",
//         prix: 67
//     },
//     {
//         id: "f78cc191-e69c-498f-bf46-9a3b3947b921",
//         nom_produit: "voluptate nulla deserunt laboris tempor eu pariatur ipsum",
//         description: "enim mollit ex culpa ex deserunt magna aliqua cupidatat consectetur adipisicing dolor minim eu ullamco cillum nisi consectetur aute consectetur dolor reprehenderit magna ut proident laboris culpa qui",
//         prix: 115
//     },
//     {
//         id: "43955312-7587-41ef-bb4f-43619bb21db8",
//         nom_produit: "enim deserunt consequat qui non exercitation sunt labore anim eiusmod",
//         description: "in ex duis laboris dolore exercitation qui sunt occaecat labore elit esse nostrud laborum Lorem nisi mollit reprehenderit ad in nulla ullamco",
//         prix: 70
//     },
//     {
//         id: "9378eafe-8aa0-4dc0-8b31-a3f8296c425e",
//         nom_produit: "dolore fugiat fugiat Lorem",
//         description: "duis deserunt irure incididunt laboris ullamco eu cillum",
//         prix: 4
//     },
//     {
//         id: "800beb11-d742-4a6b-8b45-eabaa0a360d2",
//         nom_produit: "non duis aliqua occaecat est enim pariatur",
//         description: "commodo fugiat cupidatat ullamco aliquip duis id dolor esse fugiat amet sint et",
//         prix: 42
//     },
//     {
//         id: "e7deb45f-91ed-4818-aaf0-99b74405344c",
//         nom_produit: "deserunt mollit reprehenderit labore",
//         description: "adipisicing labore ipsum",
//         prix: 139
//     },
//     {
//         id: "41774994-b40d-4884-b0de-d1ee635ad3ae",
//         nom_produit: "commodo minim amet eu",
//         description: "tempor cillum occaecat et sit tempor eu commodo aute eiusmod enim velit eiusmod eiusmod nulla consequat ad sint pariatur commodo ea deserunt quis et deserunt consequat",
//         prix: 116
//     },
//     {
//         id: "70d82f94-e8ca-44c3-ad74-17c04cb08656",
//         nom_produit: "duis irure eiusmod ipsum deserunt aute ullamco quis occaecat magna",
//         description: "dolor laboris magna occaecat qui eiusmod aute reprehenderit pariatur ipsum Lorem nisi",
//         prix: 133
//     },
//     {
//         id: "5c8b6ac7-9614-4500-834c-fe82ab72cefe",
//         nom_produit: "magna aliqua reprehenderit enim esse voluptate",
//         description: "et velit consequat nulla dolor velit officia aute cillum laboris id consequat",
//         prix: 107
//     },
//     {
//         id: "47e5b459-1c0e-4513-b179-1d9880d8822e",
//         nom_produit: "dolore officia anim labore labore deserunt culpa voluptate",
//         description: "nostrud magna velit cillum fugiat do sint et adipisicing nostrud et non aute ad aliqua",
//         prix: 18
//     },
//     {
//         id: "7b4b3548-138c-423c-893b-025bf688bf24",
//         nom_produit: "occaecat sit ex minim nisi fugiat",
//         description: "exercitation aliquip ad reprehenderit qui amet eiusmod sunt occaecat ut",
//         prix: 144
//     },
//     {
//         id: "7d275a63-1a05-476f-bb99-11d8350c720a",
//         nom_produit: "aliqua aliquip dolore esse et cupidatat aute",
//         description: "labore velit laborum minim consectetur dolor duis aute dolore sunt magna ex dolor in ex ut nulla minim et reprehenderit proident consequat",
//         prix: 88
//     },
//     {
//         id: "5409e8ec-e255-469f-aa27-b92a48d41b01",
//         nom_produit: "amet adipisicing laboris sunt labore",
//         description: "mollit fugiat pariatur ipsum mollit deserunt officia veniam quis do tempor elit nostrud esse mollit ex exercitation id reprehenderit nulla minim",
//         prix: 130
//     },
//     {
//         id: "a9e97f78-03dd-47cd-935e-26322541a52b",
//         nom_produit: "",
//         description: "occaecat et id commodo culpa enim laborum commodo sunt et commodo",
//         prix: 18
//     },
//     {
//         id: "128eb8b7-c484-48c7-8821-0ecd2a092362",
//         nom_produit: "irure culpa quis sunt exercitation sint",
//         description: "mollit mollit anim qui sit adipisicing aliqua tempor deserunt nulla ea nostrud",
//         prix: 100
//     },
//     {
//         id: "1280a64c-92c3-4869-a95f-2b309bcc1991",
//         nom_produit: "ipsum qui aute in dolor anim",
//         description: "enim sint excepteur nisi in mollit excepteur aute culpa consectetur nisi consequat non occaecat sit nisi eiusmod incididunt exercitation esse",
//         prix: 134
//     },
//     {
//         id: "7ec04e8d-0876-4aa0-9fe5-f51091a8f9d6",
//         nom_produit: "sunt commodo",
//         description: "eu fugiat consectetur culpa ipsum nulla ea nulla aliquip veniam amet esse",
//         prix: 60
//     },
//     {
//         id: "f45a8130-d337-4c7c-95fa-29261a1599d8",
//         nom_produit: "adipisicing anim minim velit cillum eu aliquip esse occaecat officia",
//         description: "nostrud amet ad laborum ullamco ullamco exercitation ea incididunt labore laboris cillum consequat elit adipisicing aute nisi sunt minim laborum id laborum",
//         prix: 110
//     },
//     {
//         id: "1afb9339-3925-47f9-82a2-1d41041077f1",
//         nom_produit: "incididunt reprehenderit pariatur tempor esse anim laboris aliquip",
//         description: "adipisicing incididunt sunt irure exercitation elit amet qui excepteur excepteur ex sunt consectetur esse proident culpa et laborum commodo culpa non do et dolor eiusmod esse ut laboris",
//         prix: 62
//     },
//     {
//         id: "53a1b8ad-fa13-4d15-b316-afafe76ec3cb",
//         nom_produit: "laborum ex amet nisi irure exercitation ea magna",
//         description: "in duis consequat anim in adipisicing nulla anim",
//         prix: 146
//     },
//     {
//         id: "f3e6d99a-f81e-49b2-a112-425d1c75f7f5",
//         nom_produit: "proident qui voluptate commodo",
//         description: "esse velit cillum enim enim do ea in deserunt velit aliquip labore ex sint anim minim reprehenderit et ullamco qui exercitation elit sunt id pariatur",
//         prix: 134
//     },
//     {
//         id: "7b58710b-035b-440c-9f41-f1f26d27be3c",
//         nom_produit: "aute sint",
//         description: "ea duis",
//         prix: 107
//     },
//     {
//         id: "c237f91c-7694-49e3-a8de-6bb23c4195a5",
//         nom_produit: "dolor",
//         description: "magna id tempor exercitation tempor aliqua esse et in id eiusmod",
//         prix: 95
//     },
//     {
//         id: "41585260-1636-4c1c-97ad-1e9d27ea746e",
//         nom_produit: "et esse aliquip aliqua",
//         description: "velit tempor Lorem laboris et duis dolore sit quis laborum veniam tempor irure aliqua tempor eiusmod id nisi sit laborum voluptate ea mollit ex ut aliquip culpa ex dolor ex",
//         prix: 97
//     },
//     {
//         id: "1d8fe589-8cdc-4f79-bb56-9ac283f53d01",
//         nom_produit: "ad sint fugiat qui proident qui nisi deserunt et occaecat",
//         description: "mollit ullamco non duis incididunt laboris",
//         prix: 28
//     },
//     {
//         id: "bd70108c-37e5-470e-ba84-4ef66f622d9c",
//         nom_produit: "consectetur cupidatat dolor",
//         description: "amet pariatur duis laborum anim in ad ea eiusmod anim cupidatat cupidatat veniam officia",
//         prix: 62
//     },
//     {
//         id: "fc1e1456-26fc-474d-983e-965eb3ae38d4",
//         nom_produit: "ut proident do laborum ea exercitation fugiat",
//         description: "cupidatat",
//         prix: 17
//     },
//     {
//         id: "1a3ddb56-b404-4bce-8812-38c7d3cd2c20",
//         nom_produit: "eiusmod officia consequat",
//         description: "veniam sunt aliqua exercitation ipsum et exercitation esse amet non ex ex culpa consequat aliquip veniam",
//         prix: 121
//     },
//     {
//         id: "2af9ad41-023f-4965-b133-e5f5b445186d",
//         nom_produit: "cupidatat reprehenderit deserunt dolore aliquip elit officia velit tempor adipisicing",
//         description: "minim esse cillum ut mollit nostrud sunt ut consequat fugiat amet consectetur officia magna consequat exercitation magna laborum culpa ad exercitation elit exercitation laboris quis minim reprehenderit aute consequat",
//         prix: 16
//     },
//     {
//         id: "6734ebb0-e8eb-44b7-8711-6a8148010041",
//         nom_produit: "laborum id aute qui ut aute amet tempor",
//         description: "nostrud anim do voluptate excepteur consequat adipisicing ut ut anim quis magna adipisicing incididunt nisi ad magna officia ullamco sit eiusmod commodo consectetur mollit fugiat ut nostrud labore",
//         prix: 91
//     },
//     {
//         id: "f0f7ab18-a78c-4c1e-a14b-4d74afba1e98",
//         nom_produit: "amet elit magna voluptate adipisicing eiusmod ullamco ullamco",
//         description: "laborum laborum sint aliquip minim aliqua ad excepteur irure incididunt veniam velit sunt officia labore occaecat laboris qui ea occaecat",
//         prix: 8
//     },
//     {
//         id: "546237ac-b702-4141-aaac-dd1eac89f626",
//         nom_produit: "reprehenderit aute excepteur eu",
//         description: "in in Lorem velit nulla esse quis incididunt aliquip nostrud duis",
//         prix: 40
//     },
//     {
//         id: "73d6bfd0-10cc-452d-9e08-004f2714f492",
//         nom_produit: "ex dolore aliquip laboris sint ut proident sint cupidatat",
//         description: "quis ea non est aute consequat reprehenderit mollit qui eu deserunt reprehenderit duis proident laboris ullamco irure laborum proident fugiat veniam et cillum ea mollit eiusmod",
//         prix: 118
//     },
//     {
//         id: "0dec7e50-d086-4854-8ee5-44fdfb373e22",
//         nom_produit: "occaecat elit enim enim exercitation fugiat cillum proident",
//         description: "adipisicing dolor incididunt esse id velit voluptate adipisicing consequat",
//         prix: 9
//     },
//     {
//         id: "82947753-8319-4f69-b172-ef465d2ccbc6",
//         nom_produit: "ea excepteur dolore",
//         description: "aliqua nulla enim ad dolor consequat ut nulla sunt tempor eu dolore adipisicing magna occaecat est nulla eiusmod consequat aute dolor occaecat deserunt sit dolor laboris ipsum tempor mollit",
//         prix: 63
//     },
//     {
//         id: "006c7b33-3c29-46b4-be09-bfe96d9bea2e",
//         nom_produit: "excepteur id aliquip quis",
//         description: "ex ullamco nulla nisi ipsum pariatur excepteur adipisicing elit veniam consectetur ipsum labore consectetur ad adipisicing labore adipisicing amet quis aliqua ex",
//         prix: 33
//     },
//     {
//         id: "bf7dc0da-ae9e-4b92-ab39-51a36070d036",
//         nom_produit: "laborum amet id in et ad",
//         description: "tempor aliqua irure eu officia tempor ea culpa est Lorem ex nostrud Lorem pariatur elit ut irure nostrud",
//         prix: 21
//     },
//     {
//         id: "ed29e964-dc50-4dc3-94d9-7227359b1d54",
//         nom_produit: "consectetur labore irure id fugiat",
//         description: "dolore id consectetur est quis irure pariatur ex pariatur dolore labore reprehenderit enim ut pariatur velit culpa incididunt ullamco cillum ad cupidatat",
//         prix: 74
//     },
//     {
//         id: "8a5874ad-6f24-4c4e-8f5c-ffdce4118504",
//         nom_produit: "labore nisi ut ex dolor ea nisi amet",
//         description: "ullamco duis pariatur reprehenderit voluptate proident nisi tempor nostrud in irure non consequat laboris ex nisi velit Lorem irure laborum sit adipisicing do ullamco velit eu magna",
//         prix: 26
//     },
//     {
//         id: "7dec9abb-5b2f-40c7-bcef-b5df2f4ab18b",
//         nom_produit: "tempor anim",
//         description: "tempor qui aute consequat ex do sunt proident esse aute sit aliquip laboris irure enim sit",
//         prix: 119
//     },
//     {
//         id: "8a1b8480-6761-4408-b0f6-10e859d68dac",
//         nom_produit: "quis velit",
//         description: "deserunt pariatur do laborum",
//         prix: 65
//     },
//     {
//         id: "80b21783-8318-4fb1-b7f8-2ddec89f4aec",
//         nom_produit: "velit officia adipisicing eiusmod enim dolor dolore esse labore esse",
//         description: "adipisicing sunt in eu qui id eiusmod aliqua ullamco ea culpa quis reprehenderit occaecat duis",
//         prix: 148
//     },
//     {
//         id: "5077f502-b91c-4674-8259-ec631edb1132",
//         nom_produit: "nisi do sint eiusmod in nisi culpa",
//         description: "ad est dolore id duis adipisicing Lorem mollit excepteur nostrud ea irure dolore do dolore laboris do nulla aliquip adipisicing consequat cillum et",
//         prix: 128
//     },
//     {
//         id: "04eab49d-23f4-445e-bd0b-6c557e1bfbfa",
//         nom_produit: "velit in elit",
//         description: "deserunt velit amet aliquip amet ad minim occaecat excepteur",
//         prix: 0
//     },
//     {
//         id: "088f2b75-ccc6-401d-afd7-e51053275181",
//         nom_produit: "id nostrud veniam magna minim",
//         description: "laboris minim sint nulla enim veniam ut anim cillum reprehenderit reprehenderit in occaecat culpa reprehenderit exercitation anim exercitation Lorem amet sint non sint elit consequat excepteur",
//         prix: 75
//     },
//     {
//         id: "2387b647-041e-4963-a217-aedd1dcd753f",
//         nom_produit: "est incididunt excepteur commodo aute",
//         description: "laborum duis nulla ex proident culpa adipisicing laborum do duis dolore aute magna aliquip incididunt enim fugiat mollit Lorem exercitation cillum est ex dolor ad commodo nulla",
//         prix: 18
//     }
// ]
