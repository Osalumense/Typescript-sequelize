import { Sequelize } from "sequelize";
import { SequelizeAttributes, ModelStatic } from "../types/SequelizeTypes";
import { Model, Optional, DataTypes } from "sequelize";
import { ModelRegistry } from ".";
import { v4 as uuidv4 } from "uuid";

export interface UserAttributes {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: number;
  password: string;
  dob?: Date;
  status: string;
  token?: string;
  tokenExpire?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id" | "email" | "password"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

//--> Model attributes
export const UserModelAttributes: SequelizeAttributes<UserAttributes> = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuidv4(),
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ["active", "inactive"],
    defaultValue: "active",
  },
  token: DataTypes.STRING,
  tokenExpire: DataTypes.DATE,
};
// --> Factory....
export function UserFactory(sequelize: Sequelize) {
  const User = <ModelStatic<UserInstance>>sequelize.define("User", UserModelAttributes, {
    tableName: "users",
    defaultScope: {
      attributes: {
        exclude: ["password", "deletedAt"],
      },
      order: [["createdAt", "DESC"]],
    },
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  });

  User.associate = function (models: ModelRegistry) {
    const { User } = models;

    //Model association can be created here
    
  };

  User.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };
  return User;
}
