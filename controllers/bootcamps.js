const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            sucess: true,
            data: bootcamps
        })
    } catch (err) {
        res.status(400).json({sucess: false});
    }
    
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) {
            return res.status(400).json({sucess: false});
        }

        res.status(200).json({
            sucess: true,
            data: bootcamp
        })
    } catch (err) {
        res.status(400).json({sucess: false});
    }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Pivate
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            sucess: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({sucess: false});
    }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Pivate
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({sucess: true, msg: `Update bootcamp ${req.params.id}`});
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Pivate
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({sucess: true, msg: `Delete bootcamp ${req.params.id}`});
};