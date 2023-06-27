const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
};

const performMutation = (mutations) => {
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/data/mutate/production`,
      {
        headers,
        method: "post",
        body: JSON.stringify({ mutations }),
      }
    );
    return response;
  } catch (error) {
    throw new Error("Error mutating data");
  }
};

export const deleteItem = async (itemId) => {
  const mutations = [{ delete: { id: itemId } }];
  return performMutation(mutations);
};

export const createItem = async (newDetails) => {
  const mutations = [
    {
      create: {
        _type: "todo",
        details: newDetails,
        completed: false,
      },
    },
  ];

  return performMutation(mutations);
};

export const updateItem = async (id, updatedDetails, isCompleted = false) => {
  const mutations = [
    {
      patch: {
        id: id,
        set: {
          details: updatedDetails, 
          completed: isCompleted, 
        },
      },
    },
  ];

  return performMutation(mutations);
};
