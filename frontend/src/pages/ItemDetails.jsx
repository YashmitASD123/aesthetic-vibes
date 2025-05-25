import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(`/items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching Item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  console.log(item);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this Item?")) return;
    try {
      await api.delete("/items/" + id);
      toast.success("Item deleted");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete Item");
    }
  };
  const handleSave = async () => {
    if (!item.title.trim() || !item.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/items/${id}`, item);
      toast.success("Item updated successfully!");
      navigate('/')
    } catch (error) {
      console.log("Error saving the Item:", error);
      toast.error("Failed to update Item");
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Items
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Item
            </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Item title"
                  className="input input-bordered"
                  value={item.title}
                  onChange={(e) => setItem({ ...item, title: e.target.value })}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <textarea
                  placeholder="Write your Item here..."
                  className="textarea textarea-bordered h-32"
                  value={item.content}
                  onChange={(e) =>
                    setItem({ ...item, content: e.target.value })
                  }
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
