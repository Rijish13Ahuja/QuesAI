const Episode = require('../models/Episode');
const Project = require('../models/Project');
exports.createEpisode = async (req, res) => {
  try {
    const episode = await Episode.create({
      title: req.body.title,
      content: req.body.content,
      project: req.params.projectId,
      owner: req.user.id
    });
    
    await Project.findByIdAndUpdate(req.params.projectId, {
      $push: { episodes: episode._id }
    });
    
    res.status(201).json(episode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEpisode = async (req, res) => {
  try {
    const episode = await Episode.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { content: req.body.content },
      { new: true, runValidators: true }
    );
    
    if (!episode) {
      return res.status(404).json({ error: 'Episode not found' });
    }
    
    res.json(episode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};