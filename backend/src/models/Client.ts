import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

export class Client extends Model {
  public id!: number;
  public name!: string;
  public dob!: Date;
  public language!: string;
  public fundingSource!: string;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fundingSource: {
      type: DataTypes.ENUM("NDIS", "HCP", "CHSP", "DVA", "HACC"),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "clients",
  }
);
