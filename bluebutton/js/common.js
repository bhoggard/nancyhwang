function send_email(name,domain,title)  {
    var atsign ="&#64;";
    var m_a_i_l_t_o = "&#109;&#97;&#105;&#108;&#116;&#111;";
    var colon = "&#58;";
//    var expression = '<a href="' + m_a_i_l_t_o + colon + name + atsign + domain + '">' + name + atsign + domain + '</a>';
    var expression = '<a class="emailLink" href="' + m_a_i_l_t_o + colon + name + atsign + domain + '">' + title + '</a>';
    document.write (expression);
}
