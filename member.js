function skillsMember() {
  return {
    name: 'skillsMember',
    title: 'Skills Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: Rule => Rule.required(),
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'string' }],
        validation: Rule => Rule.required(),
      },
    ],
  };
}