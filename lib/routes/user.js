const Joi = require('@hapi/joi');


module.exports = [

    {
        method: 'POST',
        path: '/user',
        options: {
            validate: {
                payload: Joi.object({
                    Name: Joi.string().required(),
                    Email: Joi.string().required()
                })
            },
            handler: async (request) => {
                const { userService } = request.services();
                const data = await userService.create(request.payload);
                return { data: data };
            },
        },
    },

    {
        method: 'GET',
        path: '/user',
        options: {
            tags: ['api'],
            handler: async (request) => {                
                const { userService } = request.services();                
                const data = await userService.findAll();
                return { data: data }
            },
        },
    },
    
    {
        method: 'GET',
        path: '/UserDetails',
        options: {
            tags: ['api'],
            handler: async (request) => {
                const { userService } = request.services();
                const data = await userService.findWithDetails();
                return { data: data }
            },
        },
    },

    
]