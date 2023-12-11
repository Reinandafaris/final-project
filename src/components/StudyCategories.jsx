const StudyCategories = () => {
  // Data kategori statis
  const staticCategories = [
    {
      id: 1,
      name: "UI/UX Design",
      image: "https://i.ibb.co/MMtWtGC/uiux.jpg",
    },
    {
      id: 2,
      name: "Product Management",
      image: "https://i.ibb.co/wBSVNg9/productmanagement.jpg",
    },
    {
      id: 3,
      name: "Web Development",
      image: "https://i.ibb.co/JcL4MVW/webdevelopment.jpg",
    },
    {
      id: 4,
      name: "Android Development",
      image: "https://i.ibb.co/nmck8sy/androiddevelopment.png",
    },
    {
      id: 5,
      name: "IOS Development",
      image: "https://i.ibb.co/qydcScb/iosdevelopment.jpg",
    },
    {
      id: 6,
      name: "Data Science",
      image: "https://i.ibb.co/1GhNxDn/datascience.png",
    },
    // Tambahkan kategori lainnya sesuai kebutuhan
  ];

  return (
    <section className="container my-4">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">Kategori Belajar</h2>
        <span className="font-bold text-darkblue-05 py-2 px-4 rounded-full hover:bg-blue-200 hover:cursor-pointer transition-all duration-200">
          Lihat Semua
        </span>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-5">
      {staticCategories.map((category) => (
        <div className="font-semibold text-sm hover:cursor-pointer" key={category.id}>
          <div className="rounded-[25px] overflow-hidden">
            <img
              className="w-full h-[120px] object-cover hover:scale-105 transition-all duration-300"
              src={category.image}
              alt={category.name}
            />
          </div>
          <div className="text-center mt-3 hover:text-darkblue-05 transition-all">
            {category.name}
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default StudyCategories;
