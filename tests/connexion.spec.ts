import { test } from "../locator/fixtures";

test.describe('Connexion test', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://www.amazon.fr/');
    });

    test('Scenario1 : Login',
    {
        tag: ['@collab'],
    },
    async({ Homepage, Loginpage, Passpage }) => {
        await test.step('connexion', async() => {
            await Homepage.connexion();
            await Loginpage.connexion();
            await Passpage.connexion();
        })
    }
    )

    test('Scenario2 : Création compte particulier', 
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Createpage }) => {
        await test.step('createParticular', async() => {
            await Homepage.create();
            await Createpage.create();
        })
    }
    )

    test('Scenario3 : Création compte Pro',
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Createpage, Createpropage, Formpropage }) => {
        await test.step('create pro account', async() => {
            await Homepage.create();
            await Createpage.createPro();
            await Createpropage.create();
            await Formpropage.create();
        })
    }
    )

    test('Scenario4 : Mail déjà utilisé',
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Createpage }) => {
        await test.step('create account with used email', async() => {
            await Homepage.create();
            await Createpage.createAlreadyUse();
        })
    }
    )

    test('Sceanario5 : Search product by category',
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Listproductpage }) => {
        await test.step('search by category', async() => {
            await Homepage.selectCatagory();
            await Listproductpage.viewPage();
        })
    }
    )
})