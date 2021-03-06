import express from "express";
import sateliteService from "../services/SateliteService";

export default class SateliteController {
  constructor(){
    this.router = express
    .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .put("/:id/addSpecies/:speciesId", this.addSpecies)
      .put("/:id/removeSpecies/:speciesId", this.removeSpecies)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next){
    try {
      let data = await sateliteService.getAll();
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next){
    try {
      let data = await sateliteService.getById(req.params.id)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next){
    try {
      let data = await sateliteService.create(req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async addSpecies(req, res, next){
    try {
      let data = await sateliteService.addSpecies(req.params.id, req.params.speciesId)
      res.send(data)
    } catch (error) {
       next(error)
    }
  }

  async removeSpecies(req, res, next){
    try {
      let data = await sateliteService.removeSpecies(req.params.id, req.params.speciesId)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await sateliteService.edit(req.params.id, req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await sateliteService.delete(req.params.id)
      res.send("Satelite Deleted");
    } catch (error) {
      next(error);
    }
  }
}
