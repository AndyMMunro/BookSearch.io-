
module.export=function(sequelize, Datatypes) {
  const books = sequelize.define("books", {
    
    title: {
      type: Datatypes.STRING,
      allowNull: false,
      len:[64],
    },
    author:{
      type:Datatypes.STRING,
      allowNull: false,
      len: [64],
    },
    date:{
      type:Datatypes.DATE,
      allowNull: false,
      len:[64],
    },

  });

  books.associate = function (models){
    books.belongsTo(models.users, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return books;
}
