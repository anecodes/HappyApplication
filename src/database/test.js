const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6455874",
    name: "Lar dos Meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e ou vulnerabilidade social.",
    whatsapp: "929287738",
    images: [
      "https://images.unsplash.com/photo-1587784002360-a7c35c090720?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "das 18h até 8h",
    open_on_weekends: "0",
  });

  // Consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // Consultar somente um orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage);

  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
});