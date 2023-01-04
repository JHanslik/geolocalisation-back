require("./models");
const { Toilet } = require("./models");
const publicToilets = require("./sanisettesparis.json");

const createToilet = async () => {
    await Toilet.destroy({ where: {} });

    // Vous avez le droit aujourd'hui avec le forEach
    // mais normalement on utilise Promise.all
    publicToilets.forEach(async (toilet, i) => {
        const latitude = toilet.fields.geo_point_2d[0];
        const longitude = toilet.fields.geo_point_2d[1];

        const point = {
            type: "Point",
            coordinates: [longitude, latitude],
        };

        const toilets = await Toilet.create({
            type: toilet.fields.type,
            acces_pmr: toilet.fields.acces_pmr,
            horaire: toilet.fields.horaire,
            adresse: toilet.fields.adresse,
            arrondissement: toilet.fields.arrondissement,
            position: point,
        });

        console.log(toilets.name);
    });
};

createToilet();
