import { useEffect, useState } from "react";
import axios from "axios";

const API = `https://assignment-steel-delta.vercel.app/api/articles`;

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    const res = await axios.get(API);
    
    setArticles(res.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const addArticle = async () => {
    if (!title || !content) {
      alert("Title & content required");
      return;
    }

    await axios.post(API, {
      title,
      originalContent: content
    });

    setTitle("");
    setContent("");
    fetchArticles();
  };

  const deleteArticle = async (id) => {
    if (!window.confirm("Delete this article?")) return;
    await axios.delete(`${API}/${id}`);
    fetchArticles();
  };

  const improveArticle = async (id) => {
    setLoading(true);
    await axios.post(`${API}/${id}/improve`);
    setLoading(false);
    fetchArticles();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* TITLE */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-purple-700 mb-6">
        BeyondChats Blog System
      </h1>

      {/* ADD ARTICLE FORM */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Article</h2>

        <input
          className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border rounded-lg p-2 mb-4 h-28 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Article Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
          onClick={addArticle}
        >
          Add Article
        </button>
      </div>

      {/* ARTICLES LIST */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles && articles?.length > 0 ? articles?.map((a) => (
          <div
            key={a._id}
            className="bg-white rounded-xl shadow-lg flex flex-col"
          >
            <div className="p-5 flex-1">
              {/* ARTICLE TITLE */}
              <h3 className="text-lg font-bold text-purple-700">
                {a.title}
              </h3>

              {/* ORIGINAL ARTICLE */}
              <div className="mt-4 p-4 rounded-lg bg-amber-100 text-amber-900">
                <h4 className="font-semibold mb-1">
                  Original Article
                </h4>
                <p className="text-sm leading-relaxed">
                  {a.originalContent}
                </p>
              </div>

              {/* UPDATED ARTICLE */}
              {a.updatedContent && (
                <>
                  <div className="mt-4 p-4 rounded-lg bg-blue-100 text-blue-900">
                    <h4 className="font-semibold mb-1">
                      Updated Article
                    </h4>
                    <pre className="text-sm whitespace-pre-wrap">
                      {a.updatedContent}
                    </pre>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">
                      References
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {a.references.map((r, i) => (
                        <li key={i}>
                          <a
                            href={r}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {r}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="p-4 border-t flex gap-3">
              <button
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                onClick={() => improveArticle(a._id)}
              >
                Improve
              </button>
              <button
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                onClick={() => deleteArticle(a._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
        :
        <div>
          No Articles
          </div>
      }
      </div>

      {loading && (
        <p className="text-center text-gray-500 mt-6">
          Improving article...
        </p>
      )}
    </div>
  );
}

export default App;
