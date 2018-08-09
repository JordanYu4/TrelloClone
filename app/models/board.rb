# == Schema Information
#
# Table name: boards
#
#  id               :bigint(8)        not null, primary key
#  title            :string           not null
#  background_color :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Board < ApplicationRecord
  validates :title, :background_color, presence: true

  has_many :board_memberships
  has_many :members,
           through: :board_memberships,
           source: :member

end