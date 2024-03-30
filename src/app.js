document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-item');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.closest('.accordion-item');
            const accordionHeader = accordionItem.querySelector('.accordion-header');
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const img = accordionItem.querySelector('img');

            // Menutup semua konten accordion kecuali yang terkait dengan item yang sedang dibuka
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content !== accordionContent) {
                    content.classList.add('hidden');
                    content.parentElement.classList.remove('open');
                    content.parentElement.querySelector('.accordion-header').classList.remove('bg-secondary');
                    content.parentElement.querySelector('img').style.transform = 'rotate(0)';
                }
            });

            // Menggunakan toggle() untuk menambah/menghapus kelas 'hidden'
            accordionContent.classList.toggle('hidden');
            accordionItem.classList.toggle('open');

            // Menambahkan efek bayangan saat item terbuka
            if (!accordionContent.classList.contains('hidden')) {
                accordionHeader.classList.add('bg-secondary');
                img.style.transform = 'rotate(180deg)';
            } else {
                accordionHeader.classList.remove('bg-secondary');
                img.style.transform = 'rotate(0)';
            }
        });
    });

    const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let scrollAmount = 0;
  const scrollPerClick = window.innerWidth; // Adjust this value as per your requirement

  nextBtn.addEventListener('click', () => {
    carousel.scrollLeft += scrollPerClick;
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollLeft -= scrollPerClick;
  });
});
