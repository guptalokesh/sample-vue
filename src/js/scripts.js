// $(document).ready(() => {
//     const s = $('#setupReporting #accordion .scrolled-vh');
//     const pos = s.position();
//     $('#setupReporting #accordion .scrolled-vh').scroll(() => {
//         const windowpos = $('#setupReporting #accordion .scrolled-vh').scrollTop();
//         if (windowpos >= pos.top && windowpos >= 150) {
//             $('#setupReporting #accordion .panel').addClass('wrap-sticky-info');
//         } else {
//             $('#setupReporting #accordion .panel').removeClass('wrap-sticky-info');
//         }
//     });
//     $(document).on('click', '.sidebar-menu a', (e) => {
//         closeSidebar();
//     });
//     $(document).on('change', '.main-sidebar .custom-select select', (e) => {
//         closeSidebar();
//     });
//
//     function closeSidebar() {
//         $('body').removeClass('sidebar-open');
//     }
//     // Make textarea auto Expand
//
//     function autoexpand() {
//         $('.auto-expand').addClass('resize');
//         $('.resize').on('input', function () {
//             this.style.height = 'auto';
//             this.style.height = `${this.scrollHeight}px`;
//         });
//     }
//     $(document).on('input', '.auto-expand', (e) => {
//         autoexpand();
//     });
//     // bootstrap dropdown profile icon stop close on click inside the expended list
//     $(document).on('click', '.dropdown-menu-profile-icon', (e) => {
//         e.stopPropagation();
//     });
// });
