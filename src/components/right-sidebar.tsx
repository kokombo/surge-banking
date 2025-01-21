const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />

        <div className="profile">
          <div className="profile-img">Image</div>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
