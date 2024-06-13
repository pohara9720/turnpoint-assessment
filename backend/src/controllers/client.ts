import { Request, Response } from 'express';
import { Client } from '../models/Client';

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve clients' });
  }
};

export const createClient = async (req: Request, res: Response) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create client' });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Client.update(req.body, { where: { id } });
    if (updated) {
      const updatedClient = await Client.findOne({ where: { id } });
      res.status(200).json(updatedClient);
    } else {
      throw new Error('Client not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update client' });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Client.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      throw new Error('Client not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete client' });
  }
};
