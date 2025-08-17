import {Sticker} from '../models/Sticker.js';

export const getAllStickers = async (req, res) => {
    try {
        const stickers = await Sticker.find();
        res.status(200).json(stickers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stickers', error });
    }
}

export const addSticker = async (req, res) => {
    try {
        if (!req.body.name || !req.body.imageUrl || !req.body.description) {
            return res.status(400).json({ message: 'Name and imageUrl are required' });
        }
        const newSticker = new Sticker(req.body);
        await newSticker.save();
        res.status(201).json(newSticker);
    } catch (error) {
        res.status(500).json({ message: 'Error adding sticker', error });
    }
}