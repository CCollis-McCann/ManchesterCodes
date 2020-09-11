module.exports = (sequelize, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: [true],
          msg: 'Please provide a valid email address',
        },
        notNull: {
          args: [true],
          msg: 'Please provide an email',
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: 'Please provide a name',
        },
        notNull: {
          args: [true],
          msg: 'Please provide a name',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'Please provide a password',
        },
        lengthTest(value) {
          if (value.length < 8)
            throw new Error('Password must be longer than 8 characters');
        },
      },
    },
  };

  return sequelize.define('Reader', schema);
};
