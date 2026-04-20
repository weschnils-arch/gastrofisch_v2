import type { Lang } from '../i18n/LanguageContext';

export type BiText = string | { de: string; en: string };

export const pickText = (val: BiText, lang: Lang): string => {
    if (typeof val === 'string') return val;
    return val[lang] ?? val.de;
};

export interface Recipe {
    id: string;
    title: BiText;
    description: BiText;
    image: string;
    illustration: string;
    category: string;
    prepTime: string;
    servings: number;
    difficulty: 'Einfach' | 'Mittel' | 'Anspruchsvoll';
    ingredients: BiText[];
    instructions: BiText[];
}

export const recipes: Recipe[] = [
    {
        id: '1',
        title: { de: 'Pasta mit Garnelen und Basilikumpesto', en: 'Pasta with Prawns and Basil Pesto' },
        description: { de: 'Feine Pasta mit fangfrischen Adria-Garnelen und hausgemachtem Basilikumpesto.', en: 'Fine pasta with freshly caught Adriatic prawns and homemade basil pesto.' },
        image: '/images/recipes/recipe-1.webp',
        illustration: '/images/illustrations/garnele.png',
        category: 'hauptgerichte',
        prepTime: '45 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            { de: '400 g geschälte Garnelen', en: '400 g peeled prawns' },
            { de: '40 g Knoblauch', en: '40 g garlic' },
            { de: '0,05 l Weißwein', en: '0.05 l white wine' },
            { de: '50 g Basilikum', en: '50 g basil' },
            { de: '50 g Cashewkerne oder Pinienkerne', en: '50 g cashews or pine nuts' },
            { de: '50 g Parmesan', en: '50 g Parmesan' },
            { de: '20 g Butter', en: '20 g butter' },
            { de: '0,03 l Sonnenblumenöl', en: '0.03 l sunflower oil' },
            { de: '0,05 l Olivenöl', en: '0.05 l olive oil' },
            { de: 'Salz', en: 'Salt' },
            { de: 'Pfeffer', en: 'Pepper' },
            { de: '400 g Pasta (Fettuccine)', en: '400 g pasta (fettuccine)' }
        ],
        instructions: [
            { de: 'Pesto: Frisches Basilikum, geriebenen Parmesan, Olivenöl (die Hälfte der Menge), Sonnenblumenöl, Pinienkerne oder Cashewkerne und die Hälfte des Knoblauchs in einen Mixer oder eine Küchenmaschine geben. Alle Zutaten mixen, bis eine glatte Masse entsteht. Nach Bedarf mit Salz und schwarzem Pfeffer abschmecken. Ist das Pesto zu dick, etwas mehr Olivenöl hinzufügen.', en: 'Pesto: Place fresh basil, grated Parmesan, olive oil (half the amount), sunflower oil, pine nuts or cashews and half of the garlic in a blender or food processor. Blend until smooth. Season with salt and black pepper to taste. If the pesto is too thick, add a little more olive oil.' },
            { de: 'Die Pasta nach Packungsanleitung kochen. Wenn die Pasta al dente ist, abgießen und beiseitestellen.', en: 'Cook the pasta according to the package instructions. When al dente, drain and set aside.' },
            { de: 'In einer großen Pfanne 2 Esslöffel Olivenöl bei mittlerer Hitze erhitzen. Fein gehackten Knoblauch hinzufügen und kurz anschwitzen. Dann die Garnelen in die Pfanne geben und braten, bis sie rosa werden (gewöhnlich 2–3 Minuten). Mit Weißwein ablöschen. Wenn der Wein verdampft ist, die gekochte Pasta zu den Garnelen in die Pfanne geben.', en: 'Heat 2 tablespoons of olive oil in a large pan over medium heat. Add the finely chopped garlic and sauté briefly. Then add the prawns and fry until they turn pink (usually 2–3 minutes). Deglaze with white wine. Once the wine has evaporated, add the cooked pasta to the pan with the prawns.' },
            { de: 'Die Pasta mit dem Basilikumpesto übergießen. Alles gut vermengen. Falls nötig, etwas Kochwasser der Pasta hinzufügen, um das Pesto zu verdünnen. Ganz zum Schluss die Butter dazugeben und gut rühren, bis sie schmilzt. Warm servieren.', en: 'Pour the basil pesto over the pasta. Mix well. If needed, add a little pasta cooking water to loosen the pesto. Finally, add the butter and stir well until melted. Serve warm.' }
        ]
    },
    {
        id: '2',
        title: { de: 'Pochiertes Doradenfilet mit Mangold-Dill-Creme', en: 'Poached Sea Bream Fillet with Chard-Dill Cream' },
        description: { de: 'Zartes Doradenfilet auf einer feinen Mangold-Dill-Creme.', en: 'Tender sea bream fillet on a delicate chard and dill cream.' },
        image: '/images/recipes/recipe-2.webp',
        illustration: '/images/illustrations/goldbrasse.png',
        category: 'fisch',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            { de: '800 g Doradenfilet', en: '800 g sea bream fillet' },
            { de: '50 g Karotte', en: '50 g carrot' },
            { de: '50 g Zwiebel', en: '50 g onion' },
            { de: '20 g Knoblauch', en: '20 g garlic' },
            { de: '20 g Petersilie', en: '20 g parsley' },
            { de: '1000 g Mangold', en: '1000 g Swiss chard' },
            { de: '20 g Dill', en: '20 g dill' },
            { de: '200 g Kartoffeln', en: '200 g potatoes' },
            { de: '0,03 l Olivenöl', en: '0.03 l olive oil' },
            { de: 'Salz', en: 'Salt' },
            { de: 'Pfeffer', en: 'Pepper' },
            { de: 'Lorbeerblatt', en: 'Bay leaf' }
        ],
        instructions: [
            { de: 'Wasser in einen Topf geben und zum Kochen bringen. Kartoffeln und Mangold putzen. Die geschälten Kartoffeln in den Topf geben und 15 Minuten kochen, danach den Mangold weitere 5 Minuten mitkochen. Wenn Kartoffeln und Mangold gar sind, gut abgießen. Den abgetropften Mangold und die Kartoffeln im Mixer mit Zugabe von Kochsahne pürieren. Mit Salz, Pfeffer, getrocknetem Dill und Olivenöl abschmecken. Bei Bedarf Sahne hinzufügen, bis die gewünschte Konsistenz erreicht ist.', en: 'Bring water to a boil in a pot. Clean the potatoes and chard. Add the peeled potatoes to the pot and cook for 15 minutes, then add the chard for another 5 minutes. When the potatoes and chard are tender, drain well. Purée the drained chard and potatoes in a blender with cooking cream. Season with salt, pepper, dried dill and olive oil. Add more cream as needed until the desired consistency is reached.' },
            { de: 'In einem flachen Topf Wasser zum Kochen bringen und die Zwiebel, Knoblauch, Karotte, Lorbeerblatt und Petersilie dazugeben. Mit Salz und Pfeffer würzen. 30 Minuten kochen, am Ende Olivenöl hinzufügen und das Doradenfilet etwa 6 Minuten pochieren (je nach Dicke des Fisches). Den Fisch vorsichtig herausnehmen und mit der Mangoldcreme servieren.', en: 'Bring water to a boil in a shallow pot and add the onion, garlic, carrot, bay leaf and parsley. Season with salt and pepper. Cook for 30 minutes, add olive oil at the end, and poach the sea bream fillet for about 6 minutes (depending on thickness). Carefully remove the fish and serve with the chard cream.' }
        ]
    },
    {
        id: '3',
        title: { de: 'Marinierte Garnelen vom Grill', en: 'Grilled Marinated Prawns' },
        description: { de: 'Grill-Spezialität mit Knoblauch, Oregano und geräuchertem Paprika.', en: 'Grill specialty with garlic, oregano and smoked paprika.' },
        image: '/images/recipes/recipe-3.webp',
        illustration: '/images/illustrations/garnele.png',
        category: 'meeresfruechte',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '1000 g größere Garnelen',
            '30 g Knoblauch',
            '15 g Oregano',
            '15 g geräuchertes Paprikapulver',
            '0,1 l Olivenöl',
            '0,1 l Zitronensaft',
            '400 g Rucola',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Garnelen waschen und gut abtropfen lassen.',
            'Knoblauch und Petersilie fein hacken und mit Olivenöl und Zitronensaft vermischen. Oregano und gemahlenes geräuchertes Paprikapulver hinzufügen.',
            'Garnelen in eine flache Schüssel geben und mit der Marinade übergießen, dabei darauf achten, dass die Marinade die Garnelen gleichmäßig bedeckt. Schüssel abdecken und die Garnelen mindestens 1 Stunde im Kühlschrank marinieren lassen, gern auch länger, sogar über Nacht.',
            'Grill auf mittelhohe Temperatur vorheizen. Holzspieße 1 Stunde in Wasser einweichen, damit sie nicht anbrennen. Marinierte Garnelen aufspießen und gleichmäßig verteilen. Garnelen einige Minuten pro Seite grillen, bis sie rosa werden.',
            'Rucola waschen und putzen. Den getrockneten Salat mit Salz, Pfeffer, Zitronensaft und Olivenöl würzen. Nach Wunsch etwas Marinade in den Salat geben.',
            'Die gegrillten marinierten Garnelen warm servieren, mit frischer Zitrone und Rucolasalat.'
        ]
    },
    {
        id: '4',
        title: { de: 'Dalmatinisches Fish and Chips', en: 'Dalmatian Fish and Chips' },
        description: { de: 'Knuspriges Seehecht-Filet in Panko-Kruste mit Ofengemüse.', en: 'Crispy hake fillet in a panko crust with oven-roasted vegetables.' },
        image: '/images/recipes/recipe-4.webp',
        illustration: '/images/illustrations/seehecht.png',
        category: 'hauptgerichte',
        prepTime: '45 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '600 g Seehecht-Filet',
            '150 g Panko-Brösel',
            '400 g Kartoffeln',
            '100 g Karotte',
            '100 g Zwiebeln',
            '20 g Knoblauch',
            '20 g frischer Rosmarin',
            '0,05 l Olivenöl',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Karotte und Kartoffeln putzen, in dünne Scheiben schneiden, mit Salz, Pfeffer und Olivenöl würzen und im vorgeheizten Ofen bei 200 °C etwa 30 Minuten backen. Bevor Kartoffeln und Karotte fertig sind, die gehackten Zwiebeln und Knoblauch in Streifen dazugeben. Noch ca. 5–6 Minuten backen.',
            'Die gereinigten Fischfilets salzen und pfeffern und mit einer Mischung aus Panko-Bröseln und fein gehacktem Rosmarin bedecken. Etwas Wasser und Olivenöl zur Mischung geben, damit sie kompakt wird.',
            'Die Mischung gut auf den Fisch drücken. Den so vorbereiteten Fisch aufs Backpapier und ein Backblech legen.',
            'Den Fisch etwa 12 Minuten bei 200 °C im vorgeheizten Ofen backen. Warm mit einer Sauce nach Wahl servieren.'
        ]
    },
    {
        id: '5',
        title: { de: 'Risotto mit Kaisergranat, getrockneten Tomaten und „Škripavac"-Käse (glutenfrei)', en: 'Risotto with Langoustine, Sun-Dried Tomatoes and "Škripavac" Cheese (gluten-free)' },
        description: { de: 'Cremiges Risotto mit edlem Kaisergranat (Scampi) und geröstetem Käse.', en: 'Creamy risotto with noble langoustine (scampi) and toasted cheese.' },
        image: '/images/recipes/recipe-5.webp',
        illustration: '/images/illustrations/scampi.png',
        category: 'meeresfruechte',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '1000 g Škampi (Kaisergranat)',
            '30 g Knoblauch',
            '100 g Zwiebel',
            '100 g Karotte',
            '30 g Petersilie',
            '0,2 l Weißwein',
            '30 g getrocknete Tomaten',
            '0,1 l Olivenöl',
            '120 g Škripavac-Käse (alternativ: Mozzarella oder Feta)',
            '320 g Arborio-Reis',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Köpfe der Kaisergranate von den Schwänzen trennen. Schwänze schälen und das Fleisch beiseitestellen. Aus den Köpfen und Schalen einen Fond kochen. In einem geeigneten Topf Olivenöl erhitzen, die Schalenreste zugeben und 5–6 Minuten anschwitzen. Grob geschnittene Zwiebel, Knoblauch, Karotte und Petersilienstängel dazugeben. Wenn das Gemüse leicht anbräunt, Weißwein und Wasser hinzufügen. Den Fond leicht mit Salz und Pfefferkörnern würzen und ca. 30 Minuten kochen.',
            'In einem geeigneten Topf Olivenöl erhitzen und fein geschnittene Zwiebel 10 Minuten dünsten. Den rohen Reis zugeben und dünsten, bis er glasig wird. Fein geschnittenen Knoblauch hinzufügen und mit Weißwein ablöschen. Das Risotto ca. 15 Minuten kochen (je nach Reissorte), dabei ständig probieren. Wenn der Reis fast fertig ist, das Fleisch der Kaisergranate dazugeben, das zuvor kurz in Olivenöl in der Pfanne sautiert wurde, sowie fein geschnittene, getrocknete Tomaten. In einer kleinen Pfanne den Škripavac-Käse anrösten. Wenn der Reis fertig ist, nach Bedarf salzen und pfeffern. Am Ende Butter hinzufügen und gut einrühren. Warm servieren, mit geröstetem Škripavac-Käse in kleinen Würfeln.'
        ]
    },
    {
        id: '6',
        title: { de: 'Gefüllter Drachenkopf', en: 'Stuffed Scorpionfish' },
        description: { de: 'Ganzer Drachenkopf gefüllt mit Mangold, Pinienkernen und Basilikum.', en: 'Whole scorpionfish stuffed with chard, pine nuts and basil.' },
        image: '/images/recipes/recipe-6.webp',
        illustration: '/images/illustrations/drachenkopf.png',
        category: 'fisch',
        prepTime: '90 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '1000 g Drachenkopf',
            '500 g Mangold',
            '100 g Brot',
            '30 g Pinienkerne',
            '30 g Basilikum',
            '10 g getrockneter Fenchel',
            '20 g Schalotten',
            '200 g Tomaten',
            '50 g Butter',
            '50 g Zitrone',
            '1 l Fischfond',
            '0,05 l Olivenöl',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Den Fisch sehr vorsichtig von Schuppen befreien. Die Leber für die Füllung abtrennen.',
            'Den Fisch über den Rücken entgräten, dabei darauf achten, dass die Bauchhaut nicht durchstochen wird. Alle Gräten aus den Filets entfernen. Abspülen, trocknen und in den Kühlschrank legen.',
            'Mangold waschen und abtropfen lassen. In einer Schmorpfanne etwas Olivenöl erhitzen. Mangoldblätter kurz zusammenfallen lassen. In eine Schüssel geben, abkühlen lassen, dann so stark wie möglich ausdrücken und hacken. Tomaten im Olivenöl bei niedriger Hitze 8–10 Minuten konfieren.',
            'Pinienkerne rösten. Basilikumblätter zupfen, waschen und hacken. Brot in Croutons schneiden und die Skarpina-Leber hacken. In einer tieferen Pfanne etwas Olivenöl erhitzen, Croutons dazugeben und mit Fond tränken. Gehackte Leber, Mangold, Pinienkerne und Tomaten-Confit untermischen. Mit etwas Fischfond binden. Würzung anpassen.',
            'Den Fisch mit geöffnetem Rücken auf die Arbeitsfläche legen. Innen salzen und pfeffern. Mit der Füllung füllen. An drei Stellen binden und in eine ovale Form legen.',
            'In die Form Suppe oder Fischfond gießen und Basilikum, getrockneten Fenchel, Schalottenblätter, frische Butter, etwas Olivenöl, eine Tomatenscheibe und eine Zitronenscheibe hinzufügen.',
            '20 Minuten bei 250 °C backen.',
            'Den Fisch alle 5 Minuten begießen. Wenn er fertig ist, in eine andere Form gleicher Größe umsetzen und 20 Minuten ruhen lassen, mit Alufolie abgedeckt. Die Garflüssigkeit auffangen und reduzieren, bis sie ausreichend dick ist.',
            'Würzung anpassen und etwas Zitronensaft hinzufügen. Den Fisch mit der Sauce übergießen.'
        ]
    },
    {
        id: '7',
        title: { de: 'Schwarzes Sepia-Risotto mit Pilzen', en: 'Black Cuttlefish Risotto with Mushrooms' },
        description: { de: 'Der Klassiker der Adria: Risotto mit frischer Sepia und ihrer Tinte.', en: 'The Adriatic classic: risotto with fresh cuttlefish and its ink.' },
        image: '/images/recipes/recipe-7.webp',
        illustration: '/images/illustrations/sepia.png',
        category: 'meeresfruechte',
        prepTime: '120 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '1000 g Sepia',
            '200 g Zwiebel',
            '50 g Knoblauch',
            '50 g Petersilie',
            '150 g Pilze',
            '50 g Tomatenmark',
            '0,1 l Weißwein',
            'Lorbeerblatt',
            '8 g Sepiatinte nach Bedarf',
            '2 l Fischfond',
            '0,05 l Olivenöl',
            '400 g Reis',
            'Salz',
            'Pfeffer',
            '25 g Butter'
        ],
        instructions: [
            'Sepia waschen und reinigen. Innere Teile und Haut entfernen und die Sepiatinte aufbewahren, beiseitestellen in einer kleinen Schüssel. Den Körper in dünne Streifen schneiden, dann in kleinere Würfel; die Tentakel in kleine Stücke schneiden.',
            'Zwiebel putzen und in kleine Würfel schneiden. Knoblauch putzen und ebenfalls fein hacken, dann fein gehackte Petersilie hinzufügen.',
            'Pilze putzen und in mittelgroße Stücke schneiden. Saisonpilze verwenden, je nachdem, wann das Gericht zubereitet wird. Am besten eignen sich Austernpilze, Champignons, Steinpilze und Pfifferlinge. Pilze kurz mit etwas Butter in der Pfanne anbraten, am Ende salzen und pfeffern.',
            'In einem größeren Topf Olivenöl bei mittlerer Hitze erhitzen. Gehackte Zwiebel dazugeben und dünsten, bis sie weich ist. Sepia zugeben und einige Minuten dünsten. Dann Knoblauch, Petersilie, Tomatenmark und Lorbeerblatt hinzufügen. Darauf achten, dass der Knoblauch nicht anbrennt; mit Weißwein ablöschen und kurz kochen, dann Sepiatinte hinzufügen. Mit vorgewärmtem Fischfond aufgießen. Kochen, bis die Sepia weich ist, dann die angebratenen Pilze hinzufügen.',
            'Reis hinzufügen und bei mittlerer Hitze weiterkochen, dabei nach und nach warmen Fond schöpfkellenweise zugeben. Ständig rühren und neuen Fond zugeben, sobald die vorige Menge aufgenommen ist.',
            'Nach etwa 15 Minuten probieren und nach Bedarf salzen und pfeffern. Wenn der Reis gar ist, den Topf vom Herd nehmen, Butter hinzufügen und rühren, bis sie schmilzt.',
            'Warm servieren.'
        ]
    },
    {
        id: '8',
        title: { de: 'Sardinen im süß-sauren Savur', en: 'Sardines in Sweet-and-Sour Savur' },
        description: { de: 'Traditionell eingelegte Sardinen mit Rosinen und Pinienkernen.', en: 'Traditionally pickled sardines with raisins and pine nuts.' },
        image: '/images/recipes/recipe-8.webp',
        illustration: '/images/illustrations/seehecht.png',
        category: 'vorspeisen',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '800 g Sardinen',
            '200 g Zwiebel',
            '20 g Knoblauch',
            '100 g Tomaten',
            '50 g Rosinen',
            '50 g Pinienkerne',
            '0,1 l Prošek (süßer Dessertwein)',
            '0,1 l Weißweinessig',
            '100 g scharfes Mehl',
            '50 g Olivenöl',
            '0,5 l Sonnenblumenöl zum Frittieren',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Sardinen gründlich reinigen, Köpfe und Innereien entfernen, dann halbieren oder ganz lassen – je nach Geschmack.',
            'Zwiebel und Knoblauch fein hacken, Tomaten in Scheiben schneiden.',
            'In einer großen Pfanne Olivenöl bei mittlerer Hitze erhitzen. Gehackte Zwiebel und Knoblauch hinzufügen und braten, bis sie glasig werden.',
            'Tomaten hinzufügen, mit Prošek ablöschen und alles weiter schmoren, bis die Tomaten weich werden und eine Sauce bilden.',
            'Die gereinigten Sardinen in Mehl wenden und in der Pfanne mit Öl anbraten.',
            'Die gebratenen Sardinen in die Pfanne mit Sauce legen und darauf achten, dass der Fisch gleichmäßig verteilt ist. Nach Geschmack salzen und pfeffern.',
            'Pfanne abdecken und die Sardinen bei niedriger Hitze einige Minuten garen, dabei gelegentlich wenden, bis der Fisch weich und saftig ist. Sardinen vorsichtig servieren, damit sie nicht zerfallen.',
            'Ganz zum Schluss geröstete Pinienkerne und Rosinen hinzufügen, die 1 Stunde in Weißweinessig eingeweicht wurden.'
        ]
    },
    {
        id: '9',
        title: { de: 'Überbackene Miesmuscheln', en: 'Gratinated Mussels' },
        description: { de: 'Gratinierte Muscheln mit einer feinen Béchamel-Parmesan-Kruste.', en: 'Gratinated mussels with a fine béchamel and Parmesan crust.' },
        image: '/images/recipes/recipe-9.webp',
        illustration: '/images/illustrations/miesmuschel.png',
        category: 'vorspeisen',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '1000 g Miesmuscheln',
            '100 g Butter',
            '100 g Weizenmehl (glatt)',
            '1 l Milch',
            '5 g Muskatnuss',
            '10 g Knoblauch',
            '20 g frische Chilischote',
            '30 g frische Petersilie, fein gehackt',
            '50 g Parmesan, fein gerieben',
            '50 g Semmelbrösel',
            '100 g Zitrone (2 Stück)',
            'Salz',
            'Pfeffer',
            '0,05 l Olivenöl'
        ],
        instructions: [
            'Muscheln reinigen und waschen, dann vorsichtig öffnen und nur eine Schalenhälfte und das Muschelfleisch verwenden.',
            'Sauce zum Überbacken vorbereiten: In einem geeigneten Topf Butter schmelzen, Mehl hinzufügen und rühren, bis das Mehl eine hellgoldene Farbe bekommt. Das Mehl mit kalter Milch aufgießen und würzen: Salz, Pfeffer, Muskatnuss und Zitronenschale.',
            'Bei niedriger Hitze vorsichtig rühren, bis die Sauce eindickt. Schalenhälften mit Muschelfleisch füllen und mit Sauce übergießen. Muscheln auf ein Backblech legen und mit Semmelbröseln und geriebenem Parmesan bestreuen. Im Ofen bei 200 °C ca. 10 Minuten backen, bis sie goldbraun sind. Salsa aus Chili, Knoblauch, Petersilie und Zitronenschale zubereiten: Alles fein hacken, dann Olivenöl und Zitronensaft hinzufügen. Gut vermischen.',
            'Fertige Muscheln warm servieren und mit Salsa übergießen.'
        ]
    },
    {
        id: '10',
        title: { de: 'Sepiagulasch mit dicken Bohnen', en: 'Cuttlefish Stew with Fava Beans' },
        description: { de: 'Herzhafter Eintopf mit zarter Sepia und Riesenbohnen.', en: 'Hearty stew with tender cuttlefish and giant beans.' },
        image: '/images/recipes/recipe-10.webp',
        illustration: '/images/illustrations/sepia.png',
        category: 'hauptgerichte',
        prepTime: '120 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '1000 g Sepia',
            '400 g Zwiebel',
            '30 g Knoblauch',
            '30 g Petersilie',
            '30 g Tomatenmark',
            '0,1 l Weißwein',
            'Lorbeerblatt',
            '1 l Fischfond',
            '200 g geschälte dicke Bohnen',
            'Salz',
            'Pfeffer',
            '0,05 l Olivenöl'
        ],
        instructions: [
            'Gereinigte Sepia in Würfel schneiden.',
            'In einem geeigneten Schmorgefäß Olivenöl erhitzen und die gewürfelte Zwiebel mit Salz, Pfeffer und Lorbeer goldgelb anbraten. Etwas Tomatenmark hinzufügen und kurz anrösten. Die gewürfelte Sepia hinzufügen, Rotwein, Knoblauch dazugeben und dann alles mit Fischfond aufgießen.',
            'Kochen, bis die Sepia weich ist. Die geschälten dicken Bohnen hinzufügen und noch etwa 10 Minuten kochen.',
            'Am Ende nach Bedarf salzen und pfeffern und mit gehackter Petersilie bestreuen.',
            'Warm servieren, mit gekochter Pasta oder Polenta.'
        ]
    },
    {
        id: '11',
        title: { de: 'Gefüllte Sardinen', en: 'Stuffed Sardines' },
        description: { de: 'Sardinen-Schmetterlinge mit einer Brot-Kräuter-Füllung.', en: 'Butterflied sardines with a bread and herb stuffing.' },
        image: '/images/recipes/recipe-11.webp',
        illustration: '/images/illustrations/seehecht.png',
        category: 'vorspeisen',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '500 g Sardinen',
            '200 g altes Brot',
            '0,05 l Milch',
            '50 g salzige Sardellen',
            '20 g Petersilie',
            '10 g Knoblauch',
            '50 g Trockenfrüchte',
            '0,02 l Olivenöl',
            '50 g Zitrone (1 Stück)'
        ],
        instructions: [
            'Sardinen gründlich reinigen, Köpfe und Innereien entfernen und dann wie einen Schmetterling aufklappen.',
            'Knoblauch, salzige Sardellen, Petersilie und Trockenfrüchte fein hacken. Brot in Milch einweichen und gehackten Knoblauch, Sardellen, Petersilie und Trockenfrüchte dazugeben. Alles gut zu einer kompakten Masse verbinden.',
            'Zitronenschale in die Masse reiben und damit die Sardinen füllen. Bei Bedarf die gefüllten Sardinen mit einem Zahnstocher fixieren.',
            'Gefüllte Sardinen salzen, mit Olivenöl einölen und auf ein Backblech mit Backpapier legen. Bei 180 °C ca. 10 Minuten backen (je nach Größe).',
            'Warm servieren.'
        ]
    },
    {
        id: '12',
        title: { de: 'Miesmuscheln Buzara Art', en: 'Mussels Buzara Style' },
        description: { de: 'Der kroatische Klassiker in Weißwein-Tomaten-Sauce.', en: 'The Croatian classic in white wine and tomato sauce.' },
        image: '/images/recipes/recipe-12.webp',
        illustration: '/images/illustrations/miesmuschel.png',
        category: 'hauptgerichte',
        prepTime: '45 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '2000 g Miesmuscheln',
            '30 g Knoblauch',
            '50 g frische Petersilie, fein gehackt',
            '0,1 l Weißwein',
            '200 g Pelati (Dosentomaten)',
            '40 g Semmelbrösel (nach Bedarf)',
            'Pfeffer'
        ],
        instructions: [
            'Muscheln gründlich unter kaltem fließendem Wasser waschen, um alle Verunreinigungen zu entfernen. Jede Muschel prüfen und jene wegwerfen, die geöffnet sind und sich nicht schließen, wenn man sie leicht zusammendrückt.',
            'In einer großen Pfanne Olivenöl bei mittlerer Hitze erhitzen.',
            'Fein gehackten Knoblauch hinzufügen und kurz dünsten. Fein gehackte Pelati in die Pfanne geben und weitere 5–7 Minuten kochen, bis sie weich werden. Weißwein hinzufügen und 2–3 Minuten kochen.',
            'Dann die gewaschenen Muscheln in die Pfanne geben und mit einem Deckel abdecken. Kochen, bis sich die Muscheln öffnen (ca. 5–6 Minuten). Alle Muscheln wegwerfen, die sich nicht öffnen.',
            'Wenn die Muscheln fertig sind, mit frischer Petersilie bestreuen und nach Geschmack pfeffern. Bei Bedarf Semmelbrösel hinzufügen, um die Sauce zu binden. Manchmal muss auch Salz hinzugefügt werden.',
            'Muscheln „na buzaru" warm servieren.'
        ]
    },
    {
        id: '13',
        title: { de: 'Zahnbrasse in Kräuterkruste', en: 'Dentex in a Herb Crust' },
        description: { de: 'Edle Brasse mit einer knusprigen Kruste aus dalmatinischen Kräutern.', en: 'Noble bream with a crisp crust of Dalmatian herbs.' },
        image: '/images/recipes/recipe-13.webp',
        illustration: '/images/illustrations/goldbrasse.png',
        category: 'fisch',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '800 g Zahnbrassen-Filet',
            '320 g Toastbrot',
            '240 g Butter',
            '24 g Speisestärke',
            '80 g Eier',
            '20 g Knoblauch',
            '10 g frischer Rosmarin oder andere Kräuter',
            '0,03 l Olivenöl',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Würzige Kruste aus dalmatinischen Kräutern:',
            'Toast im Mixer fein mahlen, dann Butter, Stärke und verquirlte Eier hinzufügen. Mit Salz, Pfeffer und gehackten Kräutern würzen. Alles zusammen in der Küchenmaschine vermengen. Die Kruste zwischen zwei Backpapieren ausrollen/formen. Bis zur Verwendung im Kühlschrank aufbewahren.',
            'Zahnbrassen-Filet ohne Gräten und Haut mit Salz und Pfeffer würzen und auf Backpapier legen. Mit der Kruste bedecken und die Kruste auf den Fisch drücken. Etwa 10 Minuten im vorgeheizten Ofen bei 210 °C backen.',
            'Mit dalmatinischer Verdura (Mangold mit Kartoffeln) servieren.'
        ]
    },
    {
        id: '14',
        title: { de: 'Wolfsbarsch-Carpaccio mit Zitronen-Knoblauch-Creme', en: 'Seabass Carpaccio with Lemon-Garlic Cream' },
        description: { de: 'Hauchdünner Wolfsbarsch mit Zitronen-Knoblauch-Creme.', en: 'Paper-thin seabass with a lemon and garlic cream.' },
        image: '/images/recipes/recipe-14.webp',
        illustration: '/images/illustrations/branzino_wolfsbarsch.png',
        category: 'vorspeisen',
        prepTime: '120 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '600 g Wolfsbarschfilet',
            '100 g Zitrone',
            '0,03 l Olivenöl',
            'Salz',
            'Pfeffer',
            '100 g Cherrytomaten',
            '200 g Rucola',
            'Für die Creme:',
            '20 g Knoblauch',
            '0,1 l Milch',
            '0,3 l Sonnenblumenöl',
            'Zitronenschale'
        ],
        instructions: [
            'Wolfsbarschfilets in dünne, mundgerechte Scheiben schneiden. Mindestens 2 Stunden in Zitronen- und Orangensaft marinieren. Vor dem Servieren mit Fleur de Sel, frisch gemahlenem Pfeffer und Olivenöl würzen.',
            'Zitronen-Knoblauch-Creme',
            'In einem schmalen, tiefen Gefäß Knoblauch, Öl und Milch mischen. Mit dem Stabmixer langsam mixen, bis eine mayonnaiseähnliche Masse entsteht. Sobald sie emulgiert, mit Salz, Pfeffer und Zitronenschale würzen und gut verrühren. Milch und Öl vor der Verwendung gut kühlen.',
            'Cherrytomaten in Zitronensaft marinieren und mit Salz und Pfeffer würzen.',
            'Carpaccio auf Rucola und Cherrytomaten anrichten und mit der Zitronen-Knoblauch-Creme übergießen.'
        ]
    },
    {
        id: '15',
        title: { de: 'St. Petersfisch in Backpapier', en: 'John Dory en Papillote' },
        description: { de: 'Schonend gegart mit Zucchini, Karotten und Knoblauch.', en: 'Gently cooked with zucchini, carrots and garlic.' },
        image: '/images/recipes/recipe-15.webp',
        illustration: '/images/illustrations/st_petersfisch.png',
        category: 'fisch',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '800 g St. Petersfisch-Filet',
            '200 g Zucchini',
            '100 g Zwiebel',
            '100 g Karotte',
            '20 g Knoblauch',
            '0,05 l Olivenöl',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Karotte, Zwiebel, Zucchini und Knoblauch putzen und in dünne Stifte schneiden. Mit Salz, Pfeffer und Olivenöl würzen.',
            'St.Petersfisch-Filet mit Olivenöl einölen und mit Salz und Pfeffer würzen. Backpapier in der Größe 40 x 40 cm zuschneiden. Auf das Backpapier das gewürzte Gemüse und das Filet legen und mit Olivenöl beträufeln. Papier fest wie ein Bonbon einwickeln. Im Ofen bei 180 °C 20 Minuten backen.',
            'Nach dem Garen Fisch und Gemüse aus dem Päckchen nehmen und warm servieren.'
        ]
    },
    {
        id: '16',
        title: { de: 'Pašticada vom Thunfisch mit römischen Gnocchi', en: 'Tuna Pašticada with Roman Gnocchi' },
        description: { de: 'Gedünsteter Thunfisch in reicher Sauce mit römischen Gnocchi.', en: 'Braised tuna in a rich sauce with Roman gnocchi.' },
        image: '/images/recipes/recipe-16.webp',
        illustration: '/images/illustrations/blauflossenthunfisch.png',
        category: 'hauptgerichte',
        prepTime: '120 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '1000 g Thunfisch',
            '20 g Knoblauch',
            '250 g Zwiebel',
            '200 g Pelati (Dosentomaten)',
            '20 g Petersilie',
            '0,2 l Rotwein',
            '0,03 l Weinessig',
            '1 l Fischfond',
            'Salz',
            'Pfeffer',
            'Römische Gnocchi:',
            '125 g Grieß',
            '0,5 l Milch',
            '50 g geriebener Parmesan',
            '1 Ei',
            '50 g Butter',
            '50 g Semmelbrösel',
            '5 g Muskatnuss'
        ],
        instructions: [
            'Ein Stück Thunfisch von Gräten und Haut befreien. Den Thunfisch mit Knoblauchstücken spicken und mit Salz und Pfeffer würzen.',
            'In einem geeigneten Topf Olivenöl erhitzen und das Thunfischstück von jeder Seite 1 Minute anbraten. Thunfisch herausnehmen und beiseitestellen.',
            'In denselben Topf die in dünne Streifen geschnittene Zwiebel geben und einige Minuten dünsten. Wenn die Zwiebel zusammenfällt, Knoblauch und Petersilie hinzufügen und 1 Minute dünsten, dann mit Rotwein und Essig ablöschen und noch einige Minuten kochen. Dann Pelati und Thunfisch hinzufügen und ca. 40 Minuten kochen, dabei den Thunfisch ständig wenden. Bei Bedarf Fond nachgießen. Wenn der Thunfisch gar ist, herausnehmen und in dickere Scheiben schneiden.',
            'Thunfisch mit römischen Gnocchi servieren und mit Pašticada-Sauce übergießen.',
            'Römische Gnocchi',
            'Milch mit Butter und Gewürzen in einem geeigneten Topf zum Kochen bringen.',
            'Den Grieß nach und nach einrühren und bei niedriger Hitze einige Minuten kochen. Vom Herd nehmen, dann die Eier einzeln unterrühren und den geriebenen Parmesan hinzufügen. Die Masse in ein gefettetes Blech geben und zusätzlich mit Parmesan bestreuen. Abkühlen lassen.',
            'Nach Bedarf das ganze Blech oder ausgeschnittene Stücke bei 210 °C ca. 10 Minuten überbacken.'
        ]
    },
    {
        id: '17',
        title: { de: 'Gegrilltes Wolfsbarschfilet mit Romesco-Sauce', en: 'Grilled Seabass Fillet with Romesco Sauce' },
        description: { de: 'Serviert mit einer würzigen, hausgemachten Romesco-Sauce.', en: 'Served with a spicy, homemade Romesco sauce.' },
        image: '/images/recipes/recipe-17.webp',
        illustration: '/images/illustrations/branzino_wolfsbarsch.png',
        category: 'fisch',
        prepTime: '45 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '800 g Wolfsbarschfilet',
            '200 g frische rote Paprika',
            '150 g Tomaten',
            '0,05 l Olivenöl',
            '20 g Knoblauch',
            '100 g geröstete Mandeln',
            '0,02 l Essig',
            '5 g geräuchertes rotes Paprikapulver',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Paprika und Tomaten auf ein Backblech legen und bei hoher Temperatur (ca. 220 °C) im Ofen rösten, bis sie weich sind und eine leicht schwarze Haut bekommen.',
            'Wenn Paprika und Tomaten fertig sind, in ein Gefäß geben, abdecken und ein paar Minuten dämpfen lassen (das erleichtert das Schälen).',
            'Die Haut von Paprika und Tomaten entfernen und dann in kleinere Stücke schneiden.',
            'Im Mixer/Küchenmaschine geröstete Paprika und Tomaten mit gerösteten Mandeln, Knoblauch, Rotweinessig, Olivenöl und Paprikapulver mixen, bis eine glatte Sauce entsteht. Nach Bedarf mit Salz und frisch gemahlenem Pfeffer abschmecken.',
            'Für eine dickere Sauce mehr Mandeln, für eine dünnere etwas Wasser zugeben.',
            'Wolfsbarschfilet ohne Gräten gut putzen, trocknen, mit Salz, Pfeffer und Olivenöl würzen. Einige Minuten pro Seite grillen, je nach Größe.',
            'Mit gegrilltem Gemüse und Romesco-Sauce servieren.'
        ]
    },
    {
        id: '18',
        title: { de: 'St. Petersfisch mit saisonalem Gemüse', en: 'John Dory with Seasonal Vegetables' },
        description: { de: 'Einfaches, gesundes Gericht mit Kartoffeln, Zucchini und Tomaten.', en: 'Simple, healthy dish with potatoes, zucchini and tomatoes.' },
        image: '/images/recipes/recipe-18.webp',
        illustration: '/images/illustrations/st_petersfisch.png',
        category: 'hauptgerichte',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '1000 g St. Petersfisch',
            '300 g Kartoffeln',
            '100 g Karotte',
            '100 g Zwiebel',
            '200 g Zucchini',
            '100 g Cherrytomaten',
            '20 g Knoblauch',
            '20 g Petersilie',
            '0,05 l Olivenöl',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'In einem geeigneten Topf 2 Liter Wasser zum Kochen bringen.',
            'In das kochende Wasser die geschälten und in Scheiben geschnittenen Kartoffeln geben und 10 Minuten kochen. Gehackte Petersilie, in Streifen geschnittene Zwiebel, Karottenscheiben und Cherrytomaten hinzufügen. Mit Salz und Pfefferkörnern würzen.',
            'Fisch von Schuppen befreien, Kiemen und Eingeweide entfernen, gut abspülen und in den Topf zum Gemüse geben. Zucchini waschen, in Scheiben schneiden und ebenfalls hinzufügen. Fisch 15–20 Minuten kochen (je nach Größe). Darauf achten, dass er nicht zerkocht und zerfällt.',
            'Fisch und Gemüse vorsichtig herausnehmen und warm servieren, mit Olivenöl beträufeln und bei Bedarf mit Salz und Pfeffer nachwürzen.'
        ]
    },
    {
        id: '19',
        title: { de: 'Gefüllte Tintenfische mit Pršut', en: 'Stuffed Squid with Pršut' },
        description: { de: 'Mit dalmatinischem Schinken und Reis gefüllte Calamari.', en: 'Squid stuffed with Dalmatian cured ham and rice.' },
        image: '/images/recipes/recipe-19.webp',
        illustration: '/images/illustrations/pfeilkalmar.png',
        category: 'hauptgerichte',
        prepTime: '90 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '800 g Tintenfische',
            '50 g Reis',
            '20 g Knoblauch',
            '20 g Petersilie',
            '50 g Pršut',
            '200 g Pelati (Dosentomaten)',
            '100 g Zwiebel',
            '50 g Karotte',
            '50 g Selleriewurzel',
            '0,05 l Olivenöl',
            '0,1 l Weißwein',
            '10 g Zucker',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Tintenfische reinigen. Tentakel in kleine Würfel schneiden und rohen Reis hinzufügen, dann mit Knoblauch, Petersilie, Pršut, Salz, Pfeffer und Olivenöl würzen. Man kann auch etwas Semmelbrösel hinzufügen.',
            'Mit der Masse die Tintenfische füllen und mit einem Zahnstocher verschließen. Würzen und kurz in Öl anbraten.',
            'Im Öl, in dem die Tintenfische gebraten wurden, eine Sauce aus fein gehacktem Wurzelgemüse und Pelati kochen. Mit Salz, Pfeffer, Zucker und Weißwein würzen. Wenn die Sauce den gewünschten Geschmack hat, die Tintenfische hineingeben und schmoren, bis der Reis gar ist (ca. 30–40 Minuten).',
            'Mit Polenta oder Kartoffelpüree servieren.'
        ]
    },
    {
        id: '20',
        title: { de: 'Gebackene Streifenbarbe mit würziger Salsa', en: 'Baked Red Mullet with Spicy Salsa' },
        description: { de: 'Mit einer würzigen Kapern-Oliven-Chili-Salsa.', en: 'With a spicy caper, olive and chili salsa.' },
        image: '/images/recipes/recipe-20.webp',
        illustration: '/images/illustrations/goldbrasse.png',
        category: 'fisch',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '1000 g größere Streifenbarben',
            '30 g Petersilie',
            '20 g Knoblauch',
            '0,03 l Olivenöl',
            '50 g Zitrone (1 Stück)',
            '20 g Kapern',
            '50 g schwarze Oliven',
            '30 g frische Chilischoten',
            '200 g Zucchini',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Streifenbarben reinigen, waschen und trocknen. Mit Salz und Pfeffer würzen, in ein Backblech legen und mit Olivenöl beträufeln.',
            'Neben den Fisch Zucchini in größeren Stücken legen, mit Salz und Pfeffer würzen. Fisch und Zucchini bei 200 °C ca. 15 Minuten backen (je nach Größe). In einer kleinen Pfanne Olivenöl bei niedriger Temperatur erwärmen und Knoblauch, Petersilie, Kapern, Oliven und fein geschnittene Chilischoten hinzufügen. Kurz einige Minuten dünsten, darauf achten, dass die Temperatur nicht zu hoch ist. Vom Herd nehmen und Zitronenschale und -saft hinzufügen.',
            'Gebackene Rotbarbe und Zucchini anrichten und mit warmer Salsa übergießen.'
        ]
    },
    {
        id: '21',
        title: { de: 'Orzotto mit Tintenfisch', en: 'Squid Orzotto' },
        description: { de: 'Cremiges Gersten-Risotto (Orzotto) mit würzigem Tintenfisch.', en: 'Creamy barley risotto (orzotto) with spiced squid.' },
        image: '/images/recipes/recipe-21.webp',
        illustration: '/images/illustrations/pfeilkalmar.png',
        category: 'hauptgerichte',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '600 g Tintenfisch',
            '320 g Orzo',
            '150 g Lauch',
            '150 g Zwiebel',
            '20 g Knoblauch',
            '20 g Petersilie',
            '25 g Butter',
            '0,1 l Weißwein',
            '20 g Tomatenmark',
            '1 l Fischfond',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'In einem geeigneten Gefäß Zwiebel und Lauch in heißem Öl goldgelb anbraten.',
            'Tintenfisch und Tentakel in feinen Ringen hinzufügen. Anbraten, dann Tomatenmark zugeben, danach Orzo und Knoblauch, dann mit Weißwein ablöschen. Wenn der Alkohol verdampft ist, unter ständigem Rühren ca. 20 Minuten Fond nach und nach zugießen, bis der Orzo gar ist, dabei ständig probieren. Am Ende die Hitze ausschalten und Butter, Olivenöl und Petersilie hinzufügen.',
            'Salz und Pfeffer nach Bedarf.'
        ]
    },
    {
        id: '22',
        title: { de: 'Saisonaler Salat mit Rotbarbe und Mandarine', en: 'Seasonal Salad with Red Mullet and Mandarin' },
        description: { de: 'Helles Rotbarbenfilet auf winterlichem Salat mit Mandarinen.', en: 'Light red mullet fillet on a winter salad with mandarins.' },
        image: '/images/recipes/recipe-22.webp',
        illustration: '/images/illustrations/goldbrasse.png',
        category: 'vorspeisen',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '600 g Rotbarbenfilet',
            '100 g geschälte Mandarine',
            '100 g Feldsalat',
            '200 g grüner Salat',
            '100 g Cherrytomaten',
            '0,05 l Olivenöl',
            '0,1 l Sonnenblumenöl zum Braten',
            '0,02 l Balsamico-Essig',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Rotbarben vom Kopf trennen und vorsichtig filetieren. Filets waschen, salzen und kurz in Öl braten. Gebratene Filets vom überschüssigen Öl abtropfen lassen und beiseitestellen.',
            'Grünen Salat und Feldsalat gründlich waschen und trocknen (grünen Salat in kleinere Stücke schneiden). In eine Schüssel geben und mit Salz, Pfeffer, Balsamico und Olivenöl würzen. Cherrytomaten salzen und pfeffern, auf ein Blech legen und 10 Minuten bei 200 °C backen. Salat anrichten, gebratene Rotbarbenfilets und geschälte Mandarinenstücke darauflegen.',
            'Zum Schluss die Cherrytomaten dazugeben.'
        ]
    },
    {
        id: '23',
        title: { de: 'Frischer Kabeljau auf mediterrane Art', en: 'Fresh Cod, Mediterranean Style' },
        description: { de: 'Kabeljaufilet mit schwarzen Oliven, Kapern und Honig.', en: 'Cod fillet with black olives, capers and honey.' },
        image: '/images/recipes/recipe-23.webp',
        illustration: '/images/illustrations/seehecht.png',
        category: 'fisch',
        prepTime: '60 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '600 g frisches Kabeljaufilet',
            '200 g Zwiebel',
            '100 g Karotte',
            '200 g reife Tomaten',
            '20 g Knoblauch',
            '100 g schwarze Oliven',
            '30 g frische Petersilie, fein gehackt',
            '0,05 l Olivenöl',
            '0,1 l Weißwein',
            'Salz',
            'Pfeffer',
            '20 g Honig',
            '1 l Fischfond'
        ],
        instructions: [
            'Kabeljaufilets gut trocknen und kurz in einer Pfanne mit etwas Olivenöl anbraten. Gebratene Filets beiseitestellen.',
            'In einem geeigneten Topf Zwiebel in Streifen einige Minuten dünsten. Knoblauch und die Hälfte der fein gehackten Petersilie hinzufügen und kurz dünsten, dabei darauf achten, dass der Knoblauch nicht anbrennt. Weißwein hinzufügen; wenn er verdampft ist, die Tomatenwürfel dazugeben. Einige Minuten schmoren und Fischfond hinzufügen. 30 Minuten kochen und entsteinte schwarze Oliven und Kapern dazugeben. Kurz weiterkochen und dann die gebratenen Kabeljaufilets einlegen. Darauf achten, dass die Filets fast vollständig von Sauce bedeckt sind; bei Bedarf mehr Fond nachgießen. Wenn der Fisch gar ist, Honig hinzufügen, probieren und bei Bedarf mit Salz und Pfeffer würzen. Für mehr Schärfe kann auch eine Chilischote in die Sauce gegeben werden. Zum Schluss mit der restlichen Petersilie bestreuen.',
            'Warm servieren, mit gekochten Kartoffeln oder Polenta.'
        ]
    },
    {
        id: '24',
        title: { de: 'Kabeljau-Pogača (Focaccia)', en: 'Salt Cod Pogača (Focaccia)' },
        description: { de: 'Gefüllte istrische Focaccia mit Stockfisch-Pastete.', en: 'Istrian stuffed focaccia with salt cod paste.' },
        image: '/images/recipes/recipe-24.webp',
        illustration: '/images/illustrations/seehecht.png',
        category: 'hauptgerichte',
        prepTime: '120 Minuten',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '300–400 g getrockneter Kabeljau',
            '400 g Kartoffeln',
            '30 g Knoblauch',
            '300 g Tomaten',
            '20 g frische Petersilie, fein gehackt',
            '0,05 l Olivenöl',
            '0,2 l Milch',
            'Salz',
            'Pfeffer',
            'Für den Teig:',
            '500 g Weizenmehl (glatt)',
            '20 g frische Hefe',
            '260 g Wasser',
            '12 g Salz',
            '0,02 l Olivenöl'
        ],
        instructions: [
            'Getrockneten Kabeljau 3 Tage in kaltem Wasser wässern, dabei 2-mal täglich das Wasser wechseln.',
            'Den gewässerten Kabeljau in kaltem Wasser kochen, gewürzt mit Olivenöl, Salz, Pfefferkörnern und Lorbeerblatt. Wenn es aufkocht, weitere ca. 45 Minuten kochen, bis sich das Fleisch leicht von den Gräten löst. Kabeljau aus dem Sud nehmen, kurz abkühlen lassen, dann noch warm von Haut und Gräten befreien; den Sud zum Nachgießen aufbewahren.',
            'Im Kabeljau-Sud die Kartoffeln kochen. Herausnehmen und durch eine Kartoffelpresse drücken.',
            'Kabeljau in der Küchenmaschine zerkleinern. Knoblauch in Milch aufkochen.',
            'Mit einer Küchenmaschine Kabeljau und Kartoffeln mit Salz, Pfeffer und Petersilie mixen und dabei nach und nach warme Milch und Olivenöl hinzufügen, bis eine glatte Masse mit der Textur einer dicken Pastete entsteht.',
            'Tomaten in kleinere Stücke schneiden und mit Zwiebel und Olivenöl marinieren, mit Salz und Pfeffer würzen.',
            'Aus Mehl, Wasser, Hefe, Salz und Olivenöl einen Teig herstellen.',
            'Hefe im Wasser auflösen, die Hälfte des Mehls dazugeben und gut kneten, dann nach und nach Salz und den Rest des Mehls einarbeiten. Ganz zum Schluss Olivenöl hinzufügen und alles gut auskneten.',
            '45 Minuten warm gehen lassen. Wenn sich das Volumen verdoppelt hat, den Teig erneut durchkneten und etwa 30 Minuten ruhen lassen. Den Teig in zwei Teile teilen und dünn ausrollen. Den ersten Teil auf ein gefettetes und bemehltes Blech legen. Die Kabeljau-Pastete darauf verteilen, Tomatensalsa darübergeben und mit dem zweiten Teigteil bedecken. 10 Minuten gehen lassen. Ofen auf 170 °C vorheizen und die Pogača mit Olivenöl und Wasser bestreichen. Ca. 30 Minuten backen (je nach Blechgröße und Ofen).',
            'Kurz abkühlen lassen und in kleine Stücke geschnitten servieren.'
        ]
    },
    {
        id: '25',
        title: { de: 'Weißer Brudet von der Makrele', en: 'White Mackerel Brudet' },
        description: { de: 'Eintopf mit Makrele, Karotten und Kartoffeln in Weißweinfond.', en: 'Stew with mackerel, carrots and potatoes in white wine stock.' },
        image: '/images/recipes/recipe-25.webp',
        illustration: '/images/illustrations/seehecht.png',
        category: 'hauptgerichte',
        prepTime: '90 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '800 g Makrele',
            '200 g Zwiebel',
            '100 g Karotte',
            '25 g Knoblauch',
            '20 g Petersilie',
            '0,1 l Weißwein',
            '1 l Fischfond',
            '400 g Kartoffeln',
            '0,06 l Olivenöl',
            'Salz',
            'Pfeffer'
        ],
        instructions: [
            'Makrele reinigen und waschen, salzen und stehen lassen, während die übrigen Zutaten vorbereitet werden.',
            'Zwiebel und Knoblauch fein hacken, Kartoffeln und Karotten in Scheiben schneiden.',
            'In einer großen Pfanne oder einem Topf etwas Olivenöl erhitzen. Zwiebel und Knoblauch hinzufügen und braten, bis sie glasig werden.',
            'Kartoffeln und Karotten hinzufügen und ein paar Minuten mitbraten, bis das Gemüse weich wird.',
            'Weißwein hinzufügen, salzen und pfeffern und Lorbeerblatt dazugeben. Hitze reduzieren und kochen, bis es eindickt, dabei gelegentlich rühren.',
            'In einer zweiten Pfanne etwas Olivenöl erhitzen und Makrele in Stücken von beiden Seiten braten, bis sie goldbraun ist. Darauf achten, dass der Fisch nicht zu trocken wird.',
            'Wenn die Sauce die gewünschte Konsistenz hat, die gebratene Makrele in die Sauce geben und alles einige Minuten sanft köcheln lassen, damit sich die Aromen verbinden.',
            'Vor dem Servieren mit gehackter frischer Petersilie bestreuen.'
        ]
    },
    {
        id: '26',
        title: { de: 'Thunfisch in Sesam und Wok-Gemüse', en: 'Sesame-Crusted Tuna with Wok Vegetables' },
        description: { de: 'Kurzgebratenes Thunfischfilet in Sesamkruste mit knackigem Gemüse.', en: 'Seared tuna fillet in a sesame crust with crisp vegetables.' },
        image: '/images/recipes/recipe-26.webp',
        illustration: '/images/illustrations/blauflossenthunfisch.png',
        category: 'hauptgerichte',
        prepTime: '45 Minuten',
        servings: 4,
        difficulty: 'Einfach',
        ingredients: [
            '800 g Thunfischfilet',
            '80 g gerösteter Sesam',
            '100 g Karotte',
            '100 g Zwiebel',
            '200 g Zucchini',
            '20 g Knoblauch',
            '100 g rote Spitzpaprika',
            'Salz',
            'Pfeffer',
            '0,03 l Olivenöl'
        ],
        instructions: [
            'Thunfischfilets mit Salz und Pfeffer würzen und in einer heißen Grillpfanne mit etwas Olivenöl braten. Thunfisch 2 Minuten pro Seite braten, sodass er innen leicht rötlich bleibt. Den gebratenen Thunfisch mit geröstetem Sesam bestreuen. Karotte, Zwiebel, Knoblauch, Zucchini und rote Paprika in feine Stifte schneiden.',
            'In einer Wokpfanne das Gemüse anbraten. Gemüse nur kurz braten, damit es al dente bleibt. Mit Salz und Pfeffer würzen.'
        ]
    },
    {
        id: '27',
        title: { de: 'Seeteufel in Prosciutto-Mantel', en: 'Monkfish Wrapped in Prosciutto' },
        description: { de: 'Saftiges Seeteufel-Filet umhüllt von knusprigem Schinken auf mediterranem Linsensalat.', en: 'Juicy monkfish fillet wrapped in crisp prosciutto on a Mediterranean lentil salad.' },
        image: '/images/recipes/recipe-1.webp',
        illustration: '/images/illustrations/seeteufel.png',
        category: 'fisch',
        prepTime: '40 Min.',
        servings: 4,
        difficulty: 'Mittel',
        ingredients: [
            '600g Seeteufel-Filet',
            '8 Scheiben Prosciutto',
            '200g Beluga-Linsen',
            'Kirschtomaten, Schalotten',
            'Frischer Salbei',
            'Olivenöl, Weißweinessig, Salz, Pfeffer'
        ],
        instructions: [
            'Linsen nach Packungsanweisung garen.',
            'Seeteufel in Medaillons schneiden, mit Salbei belegen und in Prosciutto einwickeln.',
            'In der Pfanne von beiden Seiten goldbraun anbraten.',
            'Auf dem Linsensalat anrichten.'
        ]
    },
    {
        id: '28',
        title: { de: 'Gegrillter Oktopus auf Fenchelsalat', en: 'Grilled Octopus on Fennel Salad' },
        description: { de: 'Zarter Oktopus, erst sanft geschmort und dann kross gegrillt mit erfrischendem Fenchel.', en: 'Tender octopus, first gently braised and then crisply grilled with refreshing fennel.' },
        image: '/images/recipes/recipe-3.webp',
        illustration: '/images/illustrations/oktopus.png',
        category: 'meeresfruechte',
        prepTime: '90 Min.',
        servings: 4,
        difficulty: 'Anspruchsvoll',
        ingredients: [
            '1,2kg Oktopus (ganz)',
            '2 Fenchelknollen',
            'Orangenfilets',
            'Kapern, Oliven',
            'Lorbeerblatt, Pfefferkörner',
            'Olivenöl, Zitrone, Salz'
        ],
        instructions: [
            'Oktopus in Wasser mit Lorbeer und Pfeffer ca. 60 Min. weich köcheln.',
            'Abkühlen lassen und Tentakel abtrennen.',
            'Kurz auf dem heißen Grill oder in der Grillpfanne kross anbraten.',
            'Mit dünn gehobeltem Fenchel und Orangen anrichten.'
        ]
    },
    {
        id: '29',
        title: { de: 'Seezunge Müllerin Art', en: 'Sole Meunière' },
        description: { de: 'Der Klassiker: In Butter gebratene Seezunge mit Petersilienkartoffeln.', en: 'The classic: butter-fried Dover sole with parsley potatoes.' },
        image: '/images/recipes/recipe-2.webp',
        illustration: '/images/illustrations/seezunge.png',
        category: 'fisch',
        prepTime: '30 Min.',
        servings: 2,
        difficulty: 'Einfach',
        ingredients: [
            '2 ganze Seezungen (küchenfertig)',
            'Mehl zum Wenden',
            '150g Butter',
            '1 Zitrone',
            'Frische Petersilie',
            '500g kleine Kartoffeln'
        ],
        instructions: [
            'Kartoffeln kochen.',
            'Seezunge waschen, trocknen, salzen und in Mehl wenden.',
            'In reichlich Butter von beiden Seiten ca. 4 Min. braten.',
            'Mit brauner Butter, Zitrone und Petersilie übergießen.'
        ]
    }
];
