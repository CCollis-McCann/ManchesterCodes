module.exports = (sequelize, DataTypes) => {
  const schema = {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: 'Please provide a title',
        },
        notNull: {
          args: [true],
          msg: 'Please provide a title',
        },
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: 'Please provide an author',
        },
        notNull: {
          args: [true],
          msg: 'Please provide an author',
        },
      },
    },
    ISBN: DataTypes.STRING,
  };

  return sequelize.define('Book', schema);
};
