import { HttpStatusError } from "common-errors";
import Animal from "../models/Animal.js";

export async function getAnimals(req, res, next) {
  try {
    const animals = await Animal.find();
    return res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
}

export async function getAnimal(req, res, next) {
  try {
    const { id } = req.params;

    const animals = await Animal.find(id);
    return res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
}

export async function createAnimals(req, res, next) {
  try {
    const animal = new Animal(req.body);
    const createdAnimal = await animal.save();
    return res.status(201).json(createdAnimal);
  } catch (error) {
    next(error);
  }
}

export async function updateAnimals(req, res, next) {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);

    Object.assign(animal, req.body);

    const updatedAnimals = await animal.save();

    return res.status(200).json(updatedAnimals);
  } catch (error) {
    next(error);
  }
}
export async function deleteAnimals(req, res, next) {
  try {
    const { id } = req.params;

    const deleted = await Animal.findByIdAndDelete(id);

    if(!deleted) throw HttpStatusError(404, `Animal not found with id ${id}`);
    return res.status(200).json(deleted);
  } catch (error) {
    next(error);
  }
}
