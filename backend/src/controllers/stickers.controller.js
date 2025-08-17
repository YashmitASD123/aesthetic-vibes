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

export const updateSticker = async (req, res) => {
    try {
        const { id } = req.params;
        const {title, imageUrl, description} = req.body;
        const updatedSticker = await Sticker.findByIdAndUpdate(id, {$set: {...req.body}}, { new: true });
        if(!id) {
            return res.status(400).json({ message: 'Sticker ID is required' });
        }
        console.log(`Updating sticker with ID: ${id}`);
        if (!updatedSticker) {
            return res.status(404).json({ message: 'Sticker not found' });
        }
        res.status(200).json(updatedSticker);
    } catch (error) {
        res.status(500).json({ message: 'Error updating sticker', error });
    }
}

export const deleteSticker = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Sticker ID is required' });
        }
        const deletedSticker = await Sticker.findByIdAndDelete(id);
        if (!deletedSticker) {
            return res.status(404).json({ message: 'Sticker not found' });
        }
        res.status(200).json({ message: 'Sticker deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting sticker', error });
    }
}