import React from "react";

const PostForm = () => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Description" />
        <input type="text" placeholder="Catégorie" />
        <input type="text" placeholder="Prix de base" />
        <input type="text" placeholder="Prix de vente" />
        <input type="file" accept="image/*" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostForm;
